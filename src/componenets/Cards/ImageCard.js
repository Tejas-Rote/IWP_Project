import { ClassNames } from '@emotion/react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, useMediaQuery, useTheme, withStyles } from '@mui/material'
import React from 'react'
// import theme from './util/Theme';



const ImageCard = (props) => {
  const theme = useTheme();
  // const bp ={
  //   isXS: useMediaQuery(theme.breakpoints.down('xs')),
  // }
  // const classes = useStyles();
  return (
    <Box sx={{
      // display: 'flex',
      // height: 20,
      // width: 600,
      margin: '0.5em',
      padding: '0.5em',
    }}>
      <Card
        sx={{
          // width: 350,
          width: useMediaQuery(theme.breakpoints.up('xl')) ? 330 : 300,
          // width: useMediaQuery(
          //   if(theme.breakpoints.up('xl')){
          //     return 330;
          //   }
          // ),


          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.5)"
          }
        }}
      >
        <CardActionArea>
          <CardMedia

            component="img"
            height="250"
            src={props.img}
            // img = {require('assets/img/bg2.jpg')
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
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default ImageCard;
