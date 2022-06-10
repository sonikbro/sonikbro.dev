// import styled from 'styled-components';

// const PostMetaWraper = styled.div`
//   & > :not(:last-child)::after {
//     display: inline-block;
//     padding: 0 0.5em;
//     color: ${({ theme }) => theme.primaryColor};
//     content: '·';
//   }
// `;

type Props = {
  children: React.ReactNode;
};

const PostMetaWraper: React.FC<Props> = ({ children }) => {
  return <div className="flex items-center mt-1.5">{children}</div>;
};

export default PostMetaWraper;
