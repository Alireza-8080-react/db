import { CacheProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@mui/material';
import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Navbar';
import { cacheRtl } from './theme';
import 'react-toastify/dist/ReactToastify.css';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ToastContainer />
      <Navbar />
      <Container component='main'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily:"vazir-medium"
          }}
        >
          {children}
        </Box>
      </Container>
    </CacheProvider>
  );
};

export default Layout;
