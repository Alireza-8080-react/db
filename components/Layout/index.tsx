import { CacheProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@mui/material';
import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import { cacheRtl } from './theme';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
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
    </CacheProvider>
  );
};

export default Layout;
