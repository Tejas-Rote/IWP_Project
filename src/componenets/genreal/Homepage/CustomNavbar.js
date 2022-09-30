// import React from 'react'

// const customNavbar = () => {
//   return (
//     <div>customNavbar</div>
//   )
// }

// export default customNavbar;

import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function CustomNavbar() {


  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  }

  const handleLogin = () => {
    navigate("/login");
  }
  const theme = useTheme();
  return (
    <Box sx={{
      flexGrow: 1,
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '25px',
      width: '75vw',
      marginTop: '25px',
      // backgroundColor:theme.palette.secondary.main,

    }}>
      <AppBar position="static" elevation={8} style={{ background: 'transparent', boxShadow: 'none' }}
      // sx={{
      //   // backgroundColor: theme.palette.secondary.main,
      //   // background:'transparent',
      //   // opacity: 0
      //   // borderBottomLeftRadius: '70px',
      //   // borderBottomRightRadius: '70px',


      // }} 

      >
        <Toolbar sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor:theme.palette.secondary.dark,
          // borderEndEndRadius:50,
          // borderStartStartRadius:50,
        }}>
          <Box>
            <Typography variant="h6" component="div" sx={{
              flexGrow: 1,
              textAlign: 'justify',
              color: theme.palette.secondary.contrastText,

            }}>
              YOURBOOK
            </Typography>
          </Box>

          <Box>
            <Button
              style={{ color: theme.palette.secondary.contrastText }}
              onClick={handleRegister}
            >Register</Button>
            <Button
              style={{ color: theme.palette.secondary.contrastText }}
              onClick={handleLogin}
            >Login</Button>
          </Box>


        </Toolbar>
      </AppBar>
    </Box>
  );
};