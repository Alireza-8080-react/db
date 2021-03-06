import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
