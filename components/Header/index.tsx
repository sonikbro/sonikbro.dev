import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../Container';
// import styled from 'styled-components';
// import Container from '../Styled/Container';

// const HeaderWrapper = styled.header`
//   ul {
//     padding-left: 0;
//     margin-left: -0.3rem;
//     margin-top: 0.8em;
//     margin-bottom: 0.8em;
//   }
// `;

// const NavLink = styled.li<{ active: boolean }>`
//   margin-bottom: 0;
//   display: inline-block;
//   list-style: none;
//   margin-right: 0.5vw;

//   a {
//     padding: 0.3em;
//     display: inline-block;
//     text-decoration: ${({ active }) => (active ? 'underline' : 'unset')};
//   }
// `;

type Path = {
  link: string;
  label: string;
};

const Header = () => {
  const router = useRouter();

  const paths: Path[] = [
    {
      link: '/',
      label: 'Anatolii',
    },
    {
      link: '/posts',
      label: 'Posts',
    },
    {
      link: '/uses',
      label: 'Uses',
    },
    {
      link: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <>
      <Container>
        <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          {paths.map((link) => (
            <Link key={link.link} href={link.link}>
              <a className="hover:underline mr-3">{link.label}</a>
            </Link>
          ))}
        </div>
      </Container>
      {/* <HeaderWrapper>
        <Container>
          <nav>
            <ul>
              <NavLink active={false}>
                <Link href="/">
                  <a>Anatolii</a>
                </Link>
              </NavLink>
              <NavLink active={router.pathname == '/posts'}>
                <Link href="/posts">
                  <a>Posts</a>
                </Link>
              </NavLink>
              <NavLink active={router.pathname == '/uses'}>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </NavLink>
              <NavLink active={router.pathname == '/contact'}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </NavLink>
            </ul>
          </nav>
        </Container>
      </HeaderWrapper> */}
    </>
  );
};

export default Header;
