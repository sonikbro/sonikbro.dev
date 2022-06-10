import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="container w-full mx-auto px-3 md:px-5">{children}</div>
  );
};

export default Container;
