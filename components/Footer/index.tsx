import { siteData } from '../../data';
import Container from '../Styled/Container';
import ToggleTheme from '../ToggleTheme';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between spacing">
          <span>
            © {siteData.currentYear} / {siteData.author}
          </span>
          <ToggleTheme />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
