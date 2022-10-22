import { Box, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../Cards/CustomCard'
// import pic1 from '../../../util/images'

const array = ["1", "2", "3", "4", "5", "6", "7", "8"];
const array2 = [
  {
    id: 1,
    location: "Abu Dhabi",
  },
  {
    id: 2,
    location: "Aukland",
  },
  {
    id: 3,
    location: "Bali ",
  },
  {
    id: 4,
    location: "Bangalore ",
  },
  {
    id: 5,
    location: "Beijing ",
  },
  {
    id: 6,
    location: "Cape Town ",
  },
  {
    id: 7,
    location: "Cardiff",
  },
  {
    id: 8,
    location: "Chennai ",
  },
  {
    id: 9,
    location: "Colombo ",
  },
  {
    id: 10,
    location: "Delhi ",
  },
  {
    id: 11,
    location: "Dhaka",
  },
  {
    id: 12,
    location: "Dubai",
  },
  {
    id: 13,
    location: "Hyderabad",
  },
  {
    id: 14,
    location: "Lisbon",
  },
  {
    id: 15,
    location: "Liverpool",
  },
  {
    id: 16,
    location: "London ",
  },
  {
    id: 17,
    location: "Los Angeles ",
  },
  {
    id: 18,
    location: "Liverpool",
  },
  {
    id: 19,
    location: "Madrid ",
  },
  {
    id: 20,
    location: "Maldives",
  },
  {
    id: 21,
    location: "Manchester ",
  },
  {
    id: 22,
    location: "Melbourne",
  },
  {
    id: 23,
    location: "Mumbai",
  },
  {
    id: 24,
    location: "New York ",
  },
  {
    id: 25,
    location: "Ontario ",
  },
  {
    id: 26,
    location: "Paris",
  },
  {
    id: 27,
    location: "Rio De Janerio ",
  },
  {
    id: 28,
    location: "Singapore",
  },
  {
    id: 29,
    location: "Sydney",
  },
  {
    id: 30,
    location: "Tel Aviv",
  },
  {
    id: 31,
    location: "Tokyo "
  },];

const images = array2.map(loca => {
  return <CustomCard
    key={loca.id}
    title={loca.location}
    body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
    img={require(`../../util/locations/${loca.location}.jpg`)}

  // img={require(`../../util/images/${image}.jpg`)}
  />
})





const CardSection = (props) => {
  const theme = useTheme();
  const [queryE, setqueryE] = useState(false);
  console.log(props.query);
  console.log(array2.filter(loca => loca.location.toLowerCase().includes(props.query)))

  // useEffect(() => {
  //   if (props.query) {
  //     setqueryE(true);
  //   }

  // }, [])
  // console.log(queryE);




  const navigate = useNavigate();
  const handleBook = () => {
    navigate("/");
  }


  const images2 = array2.filter(loca => loca.location.toLowerCase().includes(props.query)).map(loca => {
    return <CustomCard
      key={loca.id}
      title={loca.location}
      body={"Lorem Ipsum is simply dummy text. "}
      img={require(`../../util/locations/${loca.location}.jpg`)}
      function={handleBook}

    // img={require(`../../util/images/${image}.jpg`)}
    />
  })


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

      {images2}

      {/* {
        queryE ? { images2 } : { images }
      } */}


    </Box>
  )
}

export default CardSection;