import { Box, Button, Divider, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import CustomNavbar2 from './CustomNavbar2'

import insta from "../../../util/images/socials/300ppi/insta.png"
import whatsapp from "../../../util/images/socials/300ppi/Whatsapp.png"


const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        FlexDirection: 'column',
        width: "100%",
        // height:'400px',
        // backgroundColor: theme.palette.secondary.dark,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 6,
        paddingBottom: 6,
        // width
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   '& > :not(style)': {
        //     m: 1,
        //     width: 128,
        //     height: 128,
        //   },
      }}
    >



      <Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 6 }}
        >

          <Box >
            <Typography variant="h5" component="h5" gutterBottom style={{ color: theme.palette.primary.contrastText, }}>
              Contact US
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.dark, fontSize: 16 }}>
              demo@gmail.com
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.dark, fontSize: 16 }}>
              +91xxx999xxx
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.primary.contrastText, fontSize: 20 }}>
              Team Members
            </Typography>

            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.dark, fontSize: 16 }}>
              Tejas Rote 20BCE2096 {"\n"}
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.dark, fontSize: 16 }}>
              Harsh 20BCE2096 {"\n"}
            </Typography><Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.dark, fontSize: 16 }}>
              Kushagra 20BCE2060 {"\n"}
            </Typography>
          </Box>




          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.primary.contrastText, fontSize: 20 }}>
              Socials
            </Typography>

            <Typography variant="h6" component="h6" gutterBottom style={{ color: theme.palette.secondary.main, fontSize: 16 }}>

              <IconButton>
                <img src={insta} alt="insta" style={{ width: "50px", height: '50px' }} />
              </IconButton>
              <IconButton>
                <img src={whatsapp} alt="whatsapp" style={{ width: "50px", height: '50px' }} />
              </IconButton>
            </Typography>

          </Box>






        </Stack>
      </Box >



    </Box >
  )
}

export default Footer
