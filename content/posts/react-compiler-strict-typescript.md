---
title: "React Compiler broke my TypeScript build"
description: "Enabling React Compiler in a webpack + ts-loader project with strict TypeScript floods the build with type errors on code I never wrote. Here's the causal chain and fix"
date: 2026-07-15
type: post
keywords:
  - React Compiler
  - React
  - TypeScript
  - webpack
  - ts-loader
  - fork-ts-checker
  - const enum
  - strict mode
---

I switched on React Compiler expecting a free win — automatic memoization, zero code changes. Instead the build blew up. Almost every guide out there assumes Babel, Vite, or SWC; mine runs on **webpack + `ts-loader` + `strict: true`**, and on that stack the compiler buries the build in TypeScript errors on code I never wrote.

## The symptom

I added `react-compiler-webpack` to the loader rule, the way the plugin's README shows it:

``` js
{
  test: /\.tsx?$/,
  use: [
    'ts-loader',
    { loader: reactCompilerLoader, options: defineReactCompilerLoaderOption({ target: '19' }) },
  ],
}
```

The build died with output like this:

``` text
17× TS2305  Module '"react/compiler-runtime"' has no exported member 'c'
 8× TS2554  Expected 2 arguments, but got 1
 6× TS7006  Parameter 't0' implicitly has an 'any' type
 7× TS7006  Parameter 'event' implicitly has an 'any' type
     …
```

I never declared a `t0`. I never imported `react/compiler-runtime`.

## Why it happens

Webpack loaders run **right-to-left**, so in `['ts-loader', reactCompilerLoader]` the compiler runs *first* and `ts-loader` type-checks its output. That ordering is deliberate: the compiler has to see your original source to memoize it. But it means the code `ts-loader` checks is no longer the code you wrote.

Here's what the compiler turns a component into. Before:

``` tsx
function PayButton({ onPay }: Props) {
  const handleClick = (event: MouseEvent) => onPay(event);
  return <button onClick={handleClick}>Pay</button>;
}
```

After (roughly what `ts-loader` now sees):

``` tsx
import { c as _c } from "react/compiler-runtime"; // TS2305: no exported member 'c'
function PayButton(t0) {                           // TS7006: 't0' implicitly 'any'
  const $ = _c(2);                                 // TS2554: signature mismatch
  const { onPay } = t0;
  let handleClick;
  if ($[0] !== onPay) {
    handleClick = (event) => onPay(event);         // TS7006: 'event' lost its contextual type
    $[0] = onPay;
    $[1] = handleClick;
  } else {
    handleClick = $[1];
  }
  return <button onClick={handleClick}>Pay</button>;
}
```

The click handler got hoisted into a standalone `const`, detaching `event` from the JSX attribute that used to give it a type. And the compiler injected a `react/compiler-runtime` import whose `c` export your installed React types don't declare.

Two families of error fall out of that:

- **`TS7006` (implicit any)** on the compiler's synthetic bindings — `t0`, and handlers that lost their contextual type. These fire only under `strict` (specifically `noImplicitAny`).
- **`TS2305` / `TS2554`** — structural mismatches from the injected runtime import and rewritten calls. Not strict-gated, but still only present because generated code is being checked.

It's generated code. You shouldn't be hand-fixing it, and you shouldn't be type-checking it either.

## The fix

Stop type-checking inside the loader, and move the type check onto your *original* source, out of band:

``` js
{
  test: /\.tsx?$/,
  use: [
    { loader: 'ts-loader', options: { transpileOnly: true } }, // transpile, don't type-check
    { loader: reactCompilerLoader, options: defineReactCompilerLoaderOption({ target: '19' }) },
  ],
}
```

``` js
plugins: [
  new ForkTsCheckerWebpackPlugin({
    typescript: { configFile: paths.resolveApp('tsconfig.json') },
  }),
]
```

`transpileOnly: true` tells `ts-loader` to emit JS without semantic checks, so the compiler's `t0` and `_c` no longer break the build. `fork-ts-checker-webpack-plugin` then runs the real type check in a separate process — on your source files, never through the loader chain, so it never sees the compiler's output. You keep full `strict` coverage on the code you actually wrote, and drop it only on the code you didn't.

## The trap: const enum

`transpileOnly` transpiles each file in isolation (the same constraint as `isolatedModules`). That breaks `const enum`, which needs cross-file type info to inline its members — so isolated transpilation can't resolve it and imports fail. The fix: turn every `const enum` into a regular `enum`.

One wrinkle if your enums live in `.d.ts` files: a `.d.ts` emits no runtime code, and a real `enum` *is* runtime (it compiles to an object). So enums that need to exist at runtime have to move from `.d.ts` to `.ts`. Pure type declarations stay in `.d.ts`.

None of this is new — [the TypeScript handbook has covered `const enum` pitfalls for years](https://www.typescriptlang.org/docs/handbook/enums.html).

## Takeaway

If you're on Babel or Vite/SWC, none of this bites you. If you're on webpack + `ts-loader` + `strict`, the chain is:

1. React Compiler must run first in the loader chain.
2. `ts-loader` then type-checks generated code, which fails under `strict`.
3. Switch `ts-loader` to `transpileOnly` and restore type-checking with `fork-ts-checker-webpack-plugin` on the original source.
