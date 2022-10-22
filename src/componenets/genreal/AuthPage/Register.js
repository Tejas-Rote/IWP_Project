import { Alert, AlertTitle, Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import GalleryCarousel from '../../Gallery/GalleryCarousel';
import CustomTextField from '../../Searchbar/CustomTextField';
import island from '../../../util/images/back2.jpg'
import { useNavigate } from 'react-router-dom';
import theme from '../../../util/Themes/theme';
import axios from 'axios';


const Register = () => {
    const theme = useTheme();

    const [success, setsuccess] = useState(false);
    const [fail, setfail] = useState(false);

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register");
    }

    const handleLogin = () => {
        navigate("/login");
    }

    // const [name, setName] = React.useState('Enter Full Name ');
    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    //     console.log(name);
    // };

    // const [email, setEmail] = React.useState('Enter Email Address ');
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    //     console.log(email);
    // };

    // const [password, setPassword] = React.useState('Enter Password ');
    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    //     console.log(password);
    // };



    const [form, setState] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const printValues = e => {
        e.preventDefault();
        var nameRegex = /^[a-zA-Z\-]+$/;
        var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        // console.log(form.fullName, form.email, form.password);
        console.log(nameRegex.test(form.fullName) || email.test(form.email));
        if (nameRegex.test(form.fullName) == false || email.test(form.email) == false) {
            setsuccess(false);
            setfail(true)
        }

        const registerd = {
            fullName: form.fullName,
            email: form.email,
            password: form.password
        }
        console.log(registerd);
        axios.post('http://localhost:4000/app/register', registerd)
            .then(response => console.log(response.data));

        navigate("/login");
    };


    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };







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
                    component="form"
                    autoComplete="off"
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
                    <Stack spacing={2} sx={{
                        width: '30%'
                    }}>

                        {/* <Box>
                            <CustomTextField placeholder="Name * " />

                        </Box>

                        <Box>
                            <CustomTextField placeholder=" Phone No. * " />


                        </Box>
                        <Box>
                            <CustomTextField placeholder="Email * " />


                        </Box>
                        <Box>
                            <CustomTextField placeholder="password * " />


                        </Box> */}
                        <TextField fullWidth required variant="filled" placeholder="Name * " value={form.fullName} name="fullName" onChange={updateField} />

                        <TextField required variant="filled" placeholder="Email * " value={form.email} name="email" type="email" onChange={updateField} />

                        <TextField required variant="filled" placeholder="password * " value={form.password} name="password" type="password" onChange={updateField} />





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
                                onClick={printValues}
                            // startIcon={<SearchIcon />}
                            // onClick={handleSearch}

                            >
                                Register
                            </Button>

                        </Box>
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
                                    <strong> Registration successful!</strong>
                                </Alert>
                            </Box>

                        )}

                        {fail && (
                            <Alert severity="error" sx={{
                                height: '80px',
                                width: '400px'
                            }}>
                                <AlertTitle>Error</AlertTitle>
                                <strong> Registration failed!</strong>
                            </Alert>
                        )}


                        <Box sx={{
                            // bgcolor: 'red',
                            display: 'flex',
                            alignItmes: 'center',
                            justifyContent: 'center',

                        }}>

                            <Button onClick={handleLogin}  >
                                Already Registerd? Login
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