import { FC, PropsWithChildren } from 'react';
import Meta from '../Meta';
import Container from '../Styled/Container';
import Header from '../Header';

const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
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
