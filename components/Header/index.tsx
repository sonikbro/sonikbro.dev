import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../Styled/Container';

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
        <ul className="pl-0 my-[.8em] -ml-2">
          {paths.map((link) => (
            <li key={link.link} className="inline-block mb-0 mr-2 md:mr-3">
              <Link href={link.link}>
                <a
                  className={`p-1 md:p-2 ${
                    router.pathname == link.link ? 'underline' : 'no-underline '
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
