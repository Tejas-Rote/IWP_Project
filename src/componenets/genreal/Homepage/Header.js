import { Box, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import CustomNavbar2 from './CustomNavbar2'
const Header = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        FlexDirection: 'column',
        width: "100%",
        // height: '200px',
        // backgroundColor:theme.palette.secondary.dark,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 6,
        marginTop: 10,
        marginBottom: 10,
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
        <Typography variant="h1" component="h1" gutterBottom style={{ color: theme.palette.common.white, }}>
          Find your next stay
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom style={{ color: theme.palette.common.white }}>
          Search deals on hotels, homes, and much more...
        </Typography>
      </Box>
    </Box>
  )
}

export default Header