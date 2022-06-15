import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../store';
import '../styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'vazir-medium',
        },
    },
});
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
