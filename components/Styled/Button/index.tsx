export type IStyledButton = React.PropsWithChildren<{
  onClick: (event: React.SyntheticEvent<HTMLButtonElement, Event>) => void;
  ariaLabel?: string;
}>

const Button: React.FC<IStyledButton> = ({ children, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      className="button-primary py-2 px-5 w-auto rounded-[5px] tracking-[-0.01em] font-extrabold inline-block cursor-pointer text-bgColor bg-primaryColor"
      onClick={(event) => onClick(event)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
