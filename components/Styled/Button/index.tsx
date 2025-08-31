import { FC, PropsWithChildren, SyntheticEvent } from 'react';

export type IStyledButton = PropsWithChildren<{
  // eslint-disable-next-line no-unused-vars
  onClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
  ariaLabel?: string;
}>

const Button: FC<IStyledButton> = ({ children, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      className="
        button-primary py-2 px-5 w-auto rounded-[5px] tracking-[-0.01em] font-extrabold inline-block cursor-pointer text-bgColor
        bg-primaryColor
      "
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
