import 'tailwindcss/tailwind.css';
import '../global.css';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient/apolloClient.config';
import UserProvider from '../components/auth/userContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
