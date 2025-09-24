import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Anatolii',
  description: 'Welcome to my personal website.',
}

export default function Page() {
  const yearsExperience = 6;

  return (
    <section>
      <h1>
        Aloha! <span className="wave-animation inline-block">👋</span> <br />{' '}I’m Anatolii,<br /> the software developer.
      </h1>
      <p>
        👨‍💻 I have been working in web development for over {yearsExperience} years and have extensive experience using technologies such as React, Redux, TypeScript, and many others web technologies.
      </p>
      <p>
        🚀 I am constantly engaged in self-improvement because I believe that learning is the key to success in the field of programming. I always stay up to date with new products and trends in the industry to keep up with the latest technologies and approaches.
      </p>
    </section>
  );
}
