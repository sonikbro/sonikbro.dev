// import styled from 'styled-components';
// import Divider from '../Styled/Divider';
// import Container from '../Styled/Container';
// import { siteData } from '../../data';
// import ToggleTheme from '../Styled/ToggleTheme';

// const FooterSection = styled.footer`
//   padding: 2rem 0;
// `;

// const FooterItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

import Container from '../Container';
import ToggleTheme from '../ToggleTheme';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div>Footer</div>
          <div>
            <ToggleTheme />
          </div>
        </Container>
      </footer>
      {/* <Divider />
      <FooterSection>
        <Container>
          <FooterItem>
            <span>
              © {siteData.currentYear} / {siteData.author}
            </span>
            <ToggleTheme />
          </FooterItem>
        </Container>
      </FooterSection> */}
    </>
  );
};

export default Footer;
