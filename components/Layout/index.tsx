import { ThemeProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@mui/material';
import { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import theme from './theme';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
