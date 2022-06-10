import type { NextPage } from 'next';
import Link from 'next/link';
import NextHead from 'next/head';
// import styled from 'styled-components';

// const ErrorWrapper = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20%;
// `;

const ErrorPage: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Page Not Be Found</title>
      </NextHead>
      <div>
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
            <a>Back to homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
