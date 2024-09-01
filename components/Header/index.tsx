import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../Styled/Container';
import ToggleTheme from '../ToggleTheme';
import Divider from '../Styled/Divider';

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
    <Container className={'header flex items-center justify-between py-4 sticky top-0 bottom-divider z-10 bg-inherit'}>
      <nav>
        <ul className="pl-0 my-[.8em]">
          {paths.map((link) => (
            <li key={link.link} className="inline-block mb-0 mr-2 md:mr-3">
              <Link 
                href={link.link} 
                className={`p-1 md:p-2 ${router.pathname == link.link ? 'underline' : 'no-underline '}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <ToggleTheme />
    </Container>
  );
};

export default Header;
