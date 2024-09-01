import React from 'react';
import Meta from '../Meta';
import Container from '../Styled/Container';
import Header from '../Header';
import Divider from '../Styled/Divider';

interface IBasicLayout {
  children: React.ReactNode;
}

const BasicLayout: React.FC<IBasicLayout> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen mb-[calc(1.8em+0.6vw)]">
        <Header />
        <main>
          <Container>
            {children}
          </Container>
        </main>
      </div>
    </>
  );
};

export default BasicLayout;
