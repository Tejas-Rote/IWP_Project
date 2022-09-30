import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import GalleryCarousel from '../../Gallery/GalleryCarousel';
import CustomTextField from '../../Searchbar/CustomTextField';
import island from '../../../util/images/back2.jpg'
import { useNavigate } from 'react-router-dom';
const Register = () => {


    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register");
    }

    const handleHome = () => {
        navigate("/");
    }

    const theme = useTheme();
    return (
        <Stack
            sx={{
                flex: 2,
                height: "100vh",
                overflow: "hidden",
                flexDirection: 'column',
                bgcolor: theme.palette.secondary.dark,
            }}
            alignItems="center"
            justifyContent="center"
        >
            <Typography
                sx={{
                    marginBottom: "1.5rem",
                    fontSize: {
                        xl: "2.5rem",
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "1.7rem",
                        xs: "1.5rem",
                    },
                    // fontFamily: "Poppins",
                    fontWeight: "500",
                    textAlign: "center",
                }}
            >
                <span style={{ color: theme.palette.primary.contrastText }}>Hey,  </span>
                <span style={{ color: theme.palette.secondary.contrastText }}>ready to Join us? </span>
            </Typography>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    padding: "0 1rem",
                    borderRadius: "1rem",
                    boxShadow: "5px 5px 6px  #000000a6",
                    transition: "all 0.5s ease",
                    overflow: "auto",
                    "&:hover": {
                        boxShadow: "10px 10px 11px #000000a6",
                    },
                    width: useMediaQuery("(max-width: 700px)") ? "90%" : "80%",
                    height: '80%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        // align
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        // eslint-disable-next-line no-useless-computed-key
                        ["@media screen and (max-width: 1280px), screen and (max-height: 800px)"]:
                        {
                            marginBottom: "6rem",
                        },
                        // eslint-disable-next-line no-useless-computed-key
                        ["@media screen and (max-width: 550px), screen and (max-height: 500px)"]:
                        {
                            marginBottom: "4rem",
                        },
                    }}
                >
                    {/* Hello */}
                    <Stack spacing={2}>

                        <Box>
                            <CustomTextField placeholder="Email * " />


                        </Box>
                        <Box>
                            <CustomTextField placeholder="password * " />


                        </Box>

                        <Box sx={{
                            // bgcolor: 'red',
                            display: 'flex',
                            alignItmes: 'center',
                            justifyContent: 'center',

                        }}>
                            <Button
                                size="small"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    backgroundColor: theme.palette.secondary.light,
                                    "&:hover": {
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        color: theme.palette.secondary.light,
                                    },
                                    transition: "0.3s",
                                    padding: 2.2,

                                }}

                                onClick={handleHome}
                            // startIcon={<SearchIcon />}
                            // onClick={handleSearch}

                            >
                                Login
                            </Button>

                        </Box>



                    </Stack>

                    <Box
                        style={{
                            display: 'flex',
                            backgroundImage: `linear-gradient(to bottom, #2948ff45, #f2fcfe1a), url(${island})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '700px',
                            width: '700px',
                            borderRadius: '50px',
                            alignItems: 'center',
                            jsutifyContent: 'center',

                        }} >
                        {/* <Box sx={{
                            width: '100%',
                            height: '100%',
                            // alignItems: 'center',
                            justifyContent: "center",

                        }}>
                            <Typography align='center' component='h3' sx={{

                            }}>
                                Come Join Us
                            </Typography>
                        </Box> */}

                        {/* <FooterP1 /> */}


                    </Box>
                    {/* <GalleryCarousel /> */}


                </Box>




            </Stack>
        </Stack>
    )
}

export default Register