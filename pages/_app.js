import "tailwindcss/tailwind.css";
import "../global.css";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient/apolloClient.config';
import UserProvider from '../components/auth/userContext';
import PropTypes from "prop-types";
function MyApp({ Component, pageProps }) {
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component:PropTypes.func,
  pageProps:PropTypes.object
}


export default MyApp
