import { Fade, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { setTotalImages, incrementImageLoaded } from "../../../redux/actions";

const GalleryCarousel = ({
    images = [],
    transitionTimeout = 2000,
    setTotalImages,
    incrementImageLoaded,
}) => {
    const [activeImage, setActiveImage] = useState(0);

    const ImageAnimationController = setInterval(() => {
        if (activeImage < images.length - 1) {
            setActiveImage(activeImage + 1);
        } else {
            setActiveImage(0);
        }
    }, transitionTimeout);

    //! use of useEffect is to act as a cleanup function for component unmount
    useEffect(() => {
        //! to set total number of images
        // setTotalImages(images.length);
        return () => {
            clearInterval(ImageAnimationController);
        };
    }, [ImageAnimationController, activeImage, images.length, setTotalImages]);

    return (
        <Stack
            sx={{
                position: "relative",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
                height: "100%",
                width: "100%",
            }}
        >
            {images.map((image, index) => (
                <Fade key={image} in={index === activeImage} timeout={1500}>
                    <img
                        src={image}
                        alt="team event images"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            objectFit: "cover",
                            borderRadius: "inherit",
                        }}
                        key={image}
                        onLoad={() => {
                            incrementImageLoaded();
                            console.log("image");
                        }}
                    />
                </Fade>
            ))}
        </Stack>
    );
};

export default GalleryCarousel;

