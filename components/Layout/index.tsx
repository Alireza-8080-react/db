import { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import classes from './index.module.scss';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classes.body}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
