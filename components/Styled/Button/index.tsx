// import styled from 'styled-components';

// const StyledButton = styled.button`
//   -webkit-appearance: none;
//   padding: 0.5em 1.2em;
//   width: auto;
//   border-radius: 5px;
//   font-size: inherit;
//   letter-spacing: -0.01em;
//   font-weight: bold;
//   white-space: inherit;
//   text-decoration: none;
//   display: inline-block;
//   vertical-align: middle;
//   text-align: center;
//   background-color: ${({ theme }) => theme.primaryColor};
//   border: 2px solid ${({ theme }) => theme.primaryColor};
//   color: ${({ theme }) => theme.bgColor};

//   transition: 0.3s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     background-color: ${({ theme }) => theme.darkPrimaryColor};
//     border-color: ${({ theme }) => theme.darkPrimaryColor};
//     outline: 0;
//   }
// `;

interface IStyledButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IStyledButton> = ({ children, onClick }) => {
  //   return <StyledButton onClick={onClick}>{children}</StyledButton>;
  return <></>;
};

export default Button;
