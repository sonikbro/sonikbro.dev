import type { NextPage } from 'next';
import Link from 'next/link';
import NextHead from 'next/head';

const ErrorPage: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Page Not Be Found</title>
      </NextHead>
      <section className="flex flex-col text-center items-center">
        <h1>
          4 <span>😢</span> 4
        </h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry, the page you are looking for does not exist, the title has
          changed, or it is temporary unavailable.
        </p>
        <p>
          <Link href={`/`}>
            Back to homepage
          </Link>
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
