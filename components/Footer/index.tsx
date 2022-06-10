import Divider from '../Styled/Divider';
import { siteData } from '../../data';
import Container from '../Container';
import ToggleTheme from '../ToggleTheme';

// const FooterSection = styled.footer`
//   padding: 2rem 0;
// `;

// const FooterItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Footer = () => {
  return (
    <>
      <Divider />
      <footer>
        <Container>
          <div className="flex items-center justify-between">
            <span>
              © {siteData.currentYear} / {siteData.author}
            </span>
            <ToggleTheme />
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
