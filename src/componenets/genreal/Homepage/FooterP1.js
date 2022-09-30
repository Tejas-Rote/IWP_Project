import { Box, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import CustomNavbar2 from './CustomNavbar2'
import CustomTextField from '../../Searchbar/CustomTextField';

import SendIcon from '@mui/icons-material/Send';


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
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}>
        <Typography variant="h3" component="h3" gutterBottom style={{ color: theme.palette.secondary.contrastText, }}>
          SIGNUP FOR MORE UPDATES
        </Typography>

        <CustomTextField placeholder="Email Address" icon={<SendIcon sx={{ color: theme.palette.primary.contrastText }} />} />
        {/* <Typography variant="h4" component="h4" gutterBottom style={{ color: theme.palette.secondary.contrastText }}>
          Search deals on hotels, homes, and much more...
        </Typography> */}
      </Box>
    </Box>
  )
}

export default Footer