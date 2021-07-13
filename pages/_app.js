import 'tailwindcss/tailwind.css';
import '../global.css';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient/apolloClient.config';
import UserProvider from '../components/auth/userContext';
import PropTypes from 'prop-types';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Create Next App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
