import { Alert, AlertTitle, Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GalleryCarousel from '../../Gallery/GalleryCarousel';
import CustomTextField from '../../Searchbar/CustomTextField';
import island from '../../../util/images/back2.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import theme from '../../../util/Themes/theme';
import axios from 'axios';


const Register = () => {
    const theme = useTheme();

    const [success, setsuccess] = useState(false);
    const [fail, setfail] = useState(false);


    const [details, setdetails] = useState({
        startDate: '',
        endDate: '',
        destination: '',
        adults: '',
        children: '',
        room: ''
    })

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.state != null) {
            // console.log("NO");
            // setisLoggedIn(true);
            setdetails(location.state.details);

        }

        // return () => {
        //   second
        // }
    }, [])


    // setdetails({
    //     [0]: location.state.date[0].startDate,
    //     [1]: location.state.date[0].endDate,
    //     [2]: props.title,
    //     [3]: location.state.options.adult,
    //     [4]: location.state.options.children,
    //     [5]: location.state.options.room
    // });
    // printValues();

    // console.log(details);


    //   const booking = {
    //     startDate: location.state.date[0].startDate,
    //     endDate: location.state.date[0].endDate,
    //     destination: props.title,
    //     adults: location.state.options.adult,
    //     children: location.state.options.children,
    //     room: location.state.options.room
    //   }




    // const navigate = useNavigate();
    // const handleBook = () => {
    //     navigate("/register");
    // }

    // const handleLogin = () => {
    //     navigate("/login");
    // }

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
        cardNumber: '',
        cardName: '',
        cvv: ''

    });

    const printValues = e => {
        e.preventDefault();
        // var nameRegex = /^[a-zA-Z\-]+$/;
        // var email = /^\/w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        // // console.log(form.fullName, form.email, form.password);
        // console.log(nameRegex.test(form.fullName) || email.test(form.email));
        // if (nameRegex.test(form.fullName) == false || email.test(form.email) == false) {
        //     setsuccess(false);
        //     setfail(true)
        // }

        const booked = {
            fullName: form.fullName,
            email: form.email,
            cardNumber: form.cardNumber,
            cardName: form.cardName,
            cvv: form.cvv
        }
        console.log(booked);
        axios.post('http://localhost:4000/app/book', booked)
            .then(response => {
                console.log(response.data)
                if (booked.fullName === '' || booked.email === '' || booked.cardNumber === '' || booked.cardName === '' || booked.cvv === '') {
                    setsuccess(false);
                    setfail(true)
                } else {
                    setsuccess(true);
                    setfail(false)
                }

                // }
            });

        // navigate("/");
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
                <span style={{ color: theme.palette.primary.contrastText }}>Booking, </span>
                <span style={{ color: theme.palette.secondary.contrastText }}>Enter credit card details </span>
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
                    width: useMediaQuery("(max-width: 700px)") ? "70%" : "50%",
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
                        width: '70%'
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
                        <TextField fullWidth required variant="filled" placeholder="Full Name * " value={form.fullName} name="fullName" onChange={updateField} />

                        <TextField required variant="filled" placeholder="Email * " value={form.email} name="email" type="email" onChange={updateField} />

                        <TextField required variant="filled" placeholder="Card Number * " value={form.cardNumber} name="cardNumber" onChange={updateField} />

                        <TextField required variant="filled" placeholder="Card Name * " value={form.cardName} name="cardName" onChange={updateField} />

                        <TextField required variant="filled" placeholder="CVV * " value={form.password} name="cvv" type="password" onChange={updateField} />





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
                                Book
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
                                    <strong> Booking successful!</strong>
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


                        {/* <Box sx={{
                            // bgcolor: 'red',
                            display: 'flex',
                            alignItmes: 'center',
                            justifyContent: 'center',

                        }}>

                            <Button onClick={handleLogin}  >
                                Already Registerd? Login
                            </Button>
                        </Box> */}



                    </Stack>

                    {/* <Box
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



                    </Box> */}
                    {/* <GalleryCarousel /> */}


                </Box>




            </Stack>
        </Stack>
    )
}

export default Register