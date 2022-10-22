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
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CustomNavbar() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [Name, setName] = useState("Name");

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  }

  const handleLogin = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    // setName("EYS");
    setisLoggedIn(false);
  }



  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.state != null) {
      // console.log("NO");
      setisLoggedIn(true);
      setName(location.state.fullName);
    }

    // return () => {
    //   second
    // }
  }, [])

  // if (location.state) {
  //   console.log("YES");
  // }

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
            {
              isLoggedIn ?
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',

                }}>
                  <Button
                    style={{ color: theme.palette.secondary.contrastText, fontSize: '18px', textAlign: "center" }}
                  // onClick={handleLogout}
                  >{location.state.fullName}</Button>

                  <Button
                    style={{ color: theme.palette.secondary.contrastText, fontSize: '18px', textAlign: "center" }}
                    onClick={handleLogout}
                  >Logout</Button>


                </Box>

                :

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

            }



          </Box>


        </Toolbar>
      </AppBar>
    </Box>
  );
};