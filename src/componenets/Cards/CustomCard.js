import { ClassNames } from '@emotion/react';
import { Alert, AlertTitle, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Rating, Typography, useMediaQuery, useTheme, withStyles } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
// import theme from './util/Theme';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}



const CustomCard = (props) => {
  const theme = useTheme();
  const [details, setdetails] = useState({
    startDate: '',
    endDate: '',
    destination: '',
    adults: '',
    children: '',
    room: ''
  })



  const location = useLocation();
  // console.log(location.state);

  const navigate = useNavigate();

  // const printValues = () => {
  //   const booking = {
  //     startDate: details.startDate,
  //     endDate: details.endDate,
  //     destination: details.destination,
  //     adults: details.adults,
  //     children: details.children,
  //     room: details.room,
  //   }
  //   // console.log(booking);
  // }

  const [success, setsuccess] = useState(false);
  const [fail, setfail] = useState(false);


  const handleBook = () => {
    // console.log(location.state.date[0].startDate, location.state.date[0].endDate, location.state.options.adult, location.state.options.children, location.state.options.room, props.title);

    // navigate("/book");


    setdetails({
      [0]: location.state.date[0].startDate,
      [1]: location.state.date[0].endDate,
      [2]: props.title,
      [3]: location.state.options.adult,
      [4]: location.state.options.children,
      [5]: location.state.options.room
    });
    // printValues();

    const booking = {
      startDate: location.state.date[0].startDate,
      endDate: location.state.date[0].endDate,
      destination: props.title,
      adults: location.state.options.adult,
      children: location.state.options.children,
      room: location.state.options.room
    }
    // console.log(booking);

    axios.post('http://localhost:4000/app/search', booking)
      .then(response => {
        console.log(response.data)
        if (response.data != null) {
          console.log("1");
          setsuccess(true);
          setfail(false);
          // navigate("/");
          // console.log(success);
          // console.log(fail);



        } else {
          setfail(true);
          setsuccess(false);
        }
      });

    // e.preventDefault();


  }

  // useEffect(() => {
  //   const booking = {
  //     startDate: details.startDate,
  //     endDate: details.endDate,
  //     destination: details.destination,
  //     adults: details.adults,
  //     children: details.children,
  //     room: details.room,
  //   }
  // }, [details])



  // console.log(details);
  // console.log(details);

  // const updateField = e => {
  //   setdetails({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   });
  // };


  // const classes = useStyles();
  return (
    <Box sx={{
      width: '600px',
      margin: '0.5em',
      padding: '0.5em',
    }}>
      {/* <Card
        sx={{
          width: useMediaQuery( "min-width:1550") ? 350 : 200,
          width: 350,
          responsive:[{
            breakpoint:1550,
            width:200,
          }]
          [theme.breakpoints.down('xl'):{
            width: 200,
          }]

          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.5)"
          }
        }}
      > */}
      {/* <CardActionArea>
          <CardMedia

            component="img"
            height="250"
            src={props.img}
            img = {require('assets/img/bg2.jpg')
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">


              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea> */}
      {/* <CardActions>
          <Button size="small" sx={{
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.contrastText,
              color: theme.palette.secondary.main,
            },
            transition: "0.3s",

          }}>
            Book {props.function}
          </Button>
        </CardActions> */}
      {/* </Card> */}


      <Card sx={{
        display: 'flex',
        // height: '400px',
        // width: '400px',
        // width: useMediaQuery(theme.breakpoints.up('xl')) ? 330 : 300,
        // width: useMediaQuery("min-width:1550") ? 350 : 200,
        // width: 350,
        // responsive: [{
        //   breakpoint: 1550,
        //   width: 200,
        // }]
        // [theme.breakpoints.down('xl'):{
        // width: 200,
        //   }]

        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.5)"
        }
      }}>
        <Grid container spacing={2}>
          <Grid item xs={8} >
            <CardMedia

              component="img"
              height="250"
              src={props.img}
              // img = {require('assets/img/bg2.jpg')
              // image="https://source.unsplash.com/random"
              alt="green iguana"
            />
          </Grid>


          <Grid item xs={4} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {props.title}
                </Typography>
                <Rating name="read-only" value={randomIntFromInterval(3, 5)} readOnly />
                <Typography variant="h6" color="text.primary" component="div">
                  {/* {props.body} */}
                  {/* $123124 */}
                  ${Math.floor((Math.random() * 1000) + 1)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {props.body}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                <Button size="small" sx={{
                  color: theme.palette.secondary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.contrastText,
                    color: theme.palette.secondary.main,
                  },
                  transition: "0.3s",

                }}
                  onClick={handleBook}

                // onClick={props.function}
                >
                  Book
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>



      </Card>
      {success && (
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Alert severity="success" sx={{
            marginTop: '20px',
            marginBottom: '20px'

          }}>
            <AlertTitle>Success</AlertTitle>
            <strong> Login Booking!</strong>
          </Alert>
        </Box>

      )}

      {fail && (
        <Alert severity="error" sx={{
          height: '80px',
          width: '400px'
        }}>
          <AlertTitle>Error</AlertTitle>
          <strong> Booking failed!</strong>
        </Alert>
      )}
    </Box >
  )
}

export default CustomCard;



