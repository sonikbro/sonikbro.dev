import { FC, PropsWithChildren, ReactNode } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: ReactNode;
}>;

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`container w-full mx-auto px-5 ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default Container;
