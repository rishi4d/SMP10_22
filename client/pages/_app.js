import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';
import redux_store from "../public/src/app/redux_store"

function MyApp({ Component, pageProps }) {
  return(
  <SessionProvider session={pageProps.session}>
    <Provider store={redux_store}>
      <Component {...pageProps} />
    </Provider>
  </SessionProvider>
  );
}

export default MyApp
