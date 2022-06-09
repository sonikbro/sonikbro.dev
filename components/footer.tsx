import ToggleTheme from './ToggleTheme';
import Container from './container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <h5>Footer</h5>
        <div>
          <ToggleTheme />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
