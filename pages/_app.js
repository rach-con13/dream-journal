import "tailwindcss/tailwind.css";
import "../global.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient/apolloClient.config";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// MyApp.propTypes = {
//   Component:PropTypes.
// };

export default MyApp;
