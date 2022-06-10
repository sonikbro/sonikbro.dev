import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../Container';

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
    <Container>
      <nav>
        <ul className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          {paths.map((link) => (
            <li
              key={link.link}
              className={`inline-block ${
                router.pathname == link.link ? 'underline' : ''
              }`}
            >
              <Link href={link.link}>
                <a className="hover:underline mr-3">{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
