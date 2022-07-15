import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <>
      <h1>
        Aloha! <span className="wave-animation inline-block">👋</span> <br />{' '}
        I’m Anatolii,
        <br /> the software developer.
      </h1>
      <p className="mb-[1.2em] text-[1.3em]">
        👨‍💻 I have good knowledge of Frontend and UI/UX, love React and
        TypeScript. I like to find solutions to complex problems that will help
        other people. I quickly adapt to new technologies and communicate well
        with people.
      </p>
    </>
  );
};

export default Index;
