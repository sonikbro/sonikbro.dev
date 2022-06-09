import React from 'react';
import Meta from '../Meta';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

interface IBasicLayout {
  children: React.ReactNode;
}

const BasicLayout: React.FC<IBasicLayout> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
