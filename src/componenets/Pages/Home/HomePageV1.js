import { Box, useTheme } from '@mui/material'
import React from 'react'


import background from '../../../util/images/svg/Background.svg';
// import image1 from '../../../util/images/1.jpg';
// import island from '../../../util/images/island1.jpg';
// import island from '../../../util/images/back2.jpg';
import island from '../../../util/images/back3.jpg';


import CustomNavbar from '../CustomNavbar'
import Header from '../Header';
import FooterP1 from '../FooterP1';
import FooterP2 from '../FooterP2';


import ImageListV1 from '../ImageListV1'
import ImageListV2 from '../ImageListV2'
import GalleryCarousel from '../GalleryCarousel'
import CardSection from '../CardSection'
import CustomSearch from './CustomSearch';

import pic1 from '../../../util/images/1.jpg';


const myStyle = {
  backgroundImage: `url(${island})`,
  height: '100vh',
  // marginTop:'-70px',
  // fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const HomePageV1 = () => {

  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '10vh',
      backgroundImage: `linear-gradient(to bottom,#191654,#43C6AC)`,

    }} >




      {/* {myStyle} */}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '80vw',
        backgroundColor: theme.palette.common.white,
        borderRadius: '0.5em',
        // justifyContent: 'center',
        // alignItems: 'center',

      }} >
        <Box
          style={{
            backgroundImage: `linear-gradient(to bottom, #2948ff45, #f2fcfe1a), 
          url(${island})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',

            borderTopLeftRadius: '0.4em',
            borderTopRightRadius: '0.4em',

          }} >

          <CustomNavbar />
          <Header />
          <CustomSearch />

        </Box>

        {/* <Box
        sx={{

        }}
        >
          <Header />
          <CustomSearch />
        </Box> */}



        <Box
        //   sx={{
        //     // backgroundColor: theme.palette.secondary.light,
        //     // // margin:20,
        //     // padding: 2,
        //     // borderRadius: 1,
        //     marginTop: '10px',
        //     marginLeft:'auto',
        //     marginRight:'auto',
        //     width: '100%',

        // }}
        >


          <GalleryCarousel title={"Demo Hotels "} type={"Image"} option={"1"} />
          {/* <img src={pic1} alt="bgr" /> */}

          <ImageListV1 />
          <CardSection />
          <ImageListV2 />
          {/* <Footer /> */}
        </Box>



        <Box
          style={{
            backgroundImage: `linear-gradient(to bottom, #2948ff45, #f2fcfe1a), 
          url(${island})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '300px',

            // borderTopLeftRadius: '0.4em',
            // borderTopRightRadius: '0.4em',

          }} >

          <FooterP1 />

        </Box>
        <FooterP2 />





        {/* <img src="../../../util/images/Background.png" alt="an image"></img> */}
      </Box>


    </Box>


  )
}

export default HomePageV1