// import styled from 'styled-components';

// const PostMetaWraper = styled.div`
//   margin-top: 0.4rem;
//   display: flex;
//   align-items: center;

//   & > :not(:last-child)::after {
//     display: inline-block;
//     padding: 0 0.5em;
//     color: ${({ theme }) => theme.primaryColor};
//     content: '·';
//   }
// `;

export default function PostMetaWraper() {
  return <hr className="border-accent-2 mt-28 mb-24" />;
}
