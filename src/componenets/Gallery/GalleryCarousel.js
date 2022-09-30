import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { Component } from 'react'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomCard from '../Cards/CustomCard';
import ImageCard from '../Cards/ImageCard';




const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const images = array.map(image => {
    return <ImageCard key={image} title={"Bombay"} body={"1,432 Locations"}
    //  img={require(`../../util/images/${image}.jpg`)}
    />
})


// const images = array.map(image => {
//     return <CustomCard
//         title={image}
//         body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
//         img={require(`../../util/images/${image}.jpg`)} />
// })



const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
        <div style={{ display: "block" }}>
            <ArrowForwardIcon style={{ ...style, display: "block", color: "black" }} onClick={onClick} />
        </div>
    );
}

const SamplePrevArrow = (props) => {

    const { style, onClick } = props;
    return (
        <div style={{ display: "block" }}>
            <ArrowBackIcon style={{ ...style, display: "block", color: "black" }} onClick={onClick} />
        </div>
    );
}

const GalleryCarousel = (props) => {
    const theme = useTheme();
    let settings_1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // slidesToShow:  useMediaQuery("(min-width: 1100px)") ? 3 : 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            },
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

            },
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }]
    };
    return (
        <Box sx={{
            margin: '2em',
            // backgroundColor:'rgba(221,221,221,0.6)',
            // borderRadius:'1em',
        }}>
            <Box sx={{
                margin: '2em',
                padding: '1em'

            }}>
                <h1> {props.title} </h1>
                <Slider {...settings_1}>

                    {images}
                </Slider>
            </Box>
        </Box>

    );
}

export default GalleryCarousel