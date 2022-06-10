interface IStyledButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IStyledButton> = ({ children, onClick }) => {
  return (
    <button
      className="button-primary py-2 px-5 w-auto rounded-[5px] tracking-[-0.01em] font-extrabold inline-block cursor-pointer bgColor-text primaryColor-bg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
