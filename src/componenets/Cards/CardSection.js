import { Box, useTheme } from '@mui/material'
import React from 'react'
import CustomCard from '../Cards/CustomCard'
// import pic1 from '../../../util/images'

const array = ["1", "2", "3", "4", "5", "6", "7", "8"];

const images = array.map(image => {
  return <CustomCard
    title={image}
    body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}

  // img={require(`../../util/images/${image}.jpg`)}
  />
})


const CardSection = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      // padding: 0,
      // padding: '1em',
      // backgroundColor:theme.palette.primary.light
      // paddingLeft:'2em',

    }}>
      {/* <CustomCard title={"first"} body={"hello"}/>
      <CustomCard title={"first"} body={"hello"}/>
      <CustomCard title={"first"} body={"hello"}/>
      <CustomCard title={"first"} body={"hello"}/>
      <CustomCard title={"first"} body={"hello"}/>
      <CustomCard title={"first"} body={"hello"}/> */}
      {/* <CustomCard title={"first"} body={"hello"}/> */}

      {images}
    </Box>
  )
}

export default CardSection;