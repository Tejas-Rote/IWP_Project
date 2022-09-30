import { ClassNames } from '@emotion/react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery, useTheme, withStyles } from '@mui/material'
import React from 'react'
// import theme from './util/Theme';



const CustomCard = (props) => {
  const theme = useTheme();
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
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
          </Grid>


          <Grid item xs={4} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {props.title}
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

                }}>
                  Book {props.function}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>



      </Card>
    </Box >
  )
}

export default CustomCard;



