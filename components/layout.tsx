import Footer from './footer';
import Meta from './meta';
import Container from './container';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
