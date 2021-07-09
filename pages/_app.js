import "tailwindcss/tailwind.css";
import "../global.css";
<<<<<<< HEAD
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient/apolloClient.config';
import UserProvider from '../components/auth/userContext';
import PropTypes from "prop-types";
=======
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient/apolloClient.config";

>>>>>>> origin/firebase
function MyApp({ Component, pageProps }) {
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

<<<<<<< HEAD
MyApp.propTypes = {
  Component:PropTypes.func,
  pageProps:PropTypes.object
}


export default MyApp
=======
// MyApp.propTypes = {
//   Component:PropTypes.
// };

export default MyApp;
>>>>>>> origin/firebase
