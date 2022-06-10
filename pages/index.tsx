import type { NextPage } from 'next';

// const TitleText = styled.h1`
//   font-size: calc(1.8em + 1.8vw);
//   font-weight: 800;

//   @media (min-width: ${({ theme }) => theme.sizes.tablet}) {
//     max-width: 22ch;
//   }
// `;

// const DescriptionText = styled.p<{ active: boolean }>`
//   font-size: ${({ active }) => (active ? '1.2em' : 'calc(.95em + 0.2vw)')};
//   margin-bottom: 1.2em;
// `;

const Index: NextPage = () => {
  return (
    <>
      <h1>
        Aloha!{' '}
        {/* <span className="animate-wave inline-block origin-[70%_70%]">👋</span>{' '} */}
        <span className="wave-animation inline-block">👋</span> <br /> I’m
        Anatolii,
        <br /> the software developer.
      </h1>
      <p>
        💁‍♂️ I have good knowledge of Frontend and UI/UX, love React and
        TypeScript. I like to find solutions to complex problems that will help
        other people. I quickly adapt to new technologies and communicate well
        with people.
      </p>
      <p>
        👨‍💻 I work at{' '}
        <a href="https://www.luxoft.com/" target="_blank" rel="noreferrer">
          Luxoft
        </a>
        . I have been a professional developer since 2019. During this time, I
        learned to find a common language with people in the team, to defend my
        point of view and be open to others.
      </p>
    </>
  );
};

export default Index;
