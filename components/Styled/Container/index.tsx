import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-3">{children}</div>;
};

export default Container;
