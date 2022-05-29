import { ThemeProvider } from '@emotion/react';
import { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import theme from './theme';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
