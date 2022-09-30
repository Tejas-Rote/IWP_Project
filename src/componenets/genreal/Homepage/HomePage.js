import { Box, useTheme } from '@mui/material'
import React from 'react'
import CardSection from './CardSection'
import CustomNavbar from './CustomNavbar'
import Footer from './FooterP1'
import GalleryCarousel from './GalleryCarousel'
import Header from './Header'
import ImageCard from './ImageCard'
import ImageListV1 from './ImageListV1'
import ImageListV2 from './ImageListV2'

const HomePage = () => {
  const theme = useTheme();
  return (


    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      // height: '100vh',
      // background: "linear-gradient(#2980B9,#6DD5FA ,#FFFFFF)",
      // background: "linear-gradient(#1c92d2,#f2fcfe)",

      backgroundColor: theme.palette.common.white,
    }}>


      <Box sx={{
        flexDirection: 'column',
        width: '100vw',
        backgroundColor: theme.palette.secondary.dark,
      }}>

        <CustomNavbar />
        <Header />

      </Box>

      <Box>
        {/* <CustomNavbar />
      <Header /> */}
        <GalleryCarousel title={"Demo Hotels "} />
        <ImageListV1 />
        <CardSection />
        <ImageListV2 />



        <Footer />
      </Box>


    </Box>
  )
}

export default HomePage


