"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
      <NextThemesProvider enableSystem={true}>
        {children}
      </NextThemesProvider>
  );
};

export default ThemeProvider;
