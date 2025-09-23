import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my personal website",
};

export default function Home() {
  // const yearsExperience = siteData.currentYear - YEAR_START_DEVELOPMENT;
  const yearsExperience = 6;

  return (
    <div className="">
      <h1>
        Aloha! <span className="wave-animation inline-block">👋</span> <br />{' '}I’m Anatolii,<br /> the software developer.
      </h1>
      <p className="mb-[1.2em] text-[1.3em]">
        👨‍💻 I have been working in web development for over {yearsExperience} years and have extensive experience using technologies such as
        React, Redux, TypeScript, and many others web technologies.
      </p>
      <p className="mb-[1em] text-[1.3em]">
        🚀 I am constantly engaged in self-improvement because I believe that learning is the key to success in the field of programming.
        I always stay up to date with new products and trends in the industry to keep up with the latest technologies and approaches.
      </p>
    </div>
  );
}
