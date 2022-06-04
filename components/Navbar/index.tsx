import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import linksWithRoles from '../../consts/linksWithRoles';

const ButtonAppBar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ direction: 'rtl' }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              onClick={() => {
                setIsOpen(true);
              }}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
            <Button
              color='inherit'
              onClick={() => {
                router.push('/login');
              }}
            >
              ورود
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        PaperProps={{
          style: {
            width: '250px'
          }
        }}
      >
        <IconButton
          onClick={() => {
            setIsOpen(false);
          }}
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <List>
          {linksWithRoles.map(({ link, roles, name, Icon }) => (
            <ListItem button key={name}>
              <ListItemButton
                onClick={() => {
                  router.push(link);
                }}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default ButtonAppBar;
