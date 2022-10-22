import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Popover, Popper, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useCallback, useEffect } from 'react'


// import background from '../../../util/images/svg/Background.svg';
// import image1 from '../../../util/images/1.jpg';
// import island from '../../../util/images/island1.jpg';
// import island from '../../../util/images/back2.jpg';
import island from '../../../util/images/back3.jpg';


import CustomNavbar from '../Homepage/CustomNavbar'
import Header from '../Homepage/Header';
import FooterP1 from '../Homepage/FooterP1';
import FooterP2 from '../Homepage/FooterP2';
import { DateRange } from 'react-date-range';

import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';


import ImageListV1 from '../../Gallery/ImageListV1'
import ImageListV2 from '../../Gallery/ImageListV2'
import GalleryCarousel from '../../Gallery/GalleryCarousel'
import CardSection from '../../Cards/CardSection'
import CustomSearch from '../../Searchbar/CustomSearch';
import DatePick from '../Homepage/DatePick';
import MemberPick from '../Homepage/MemberPick'
import pic1 from '../../../util/images/1.jpg';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns"
import CustomTextField from '../../Searchbar/CustomTextField';
import CustomTabs from '../../Searchbar/CustomTab';
// import ImageListV2 from '../../Gallery/ImageListV2';



const myStyle = {
    backgroundImage: `url(${island})`,
    height: '100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


const array2 = ["Abu Dhabi", "Aukland", "Bali ", "Bangalore ", "Beijing ", "Cape Town ", "Cardiff", "Chennai ", "Colombo ", "Delhi ", "Dhaka", "Dubai", "Hyderabad", "Lisbon", "Liverpool", "London ", "Los Angeles ", "Liverpool", "Madrid ", "Maldives", "Manchester ", "Melbourne", "Mumbai", "New York ", "Ontario ", "Paris", "Rio De Janerio ", "Singapore", "Sydney", "Tel Aviv", "Tokyo "];



const Search = () => {

    const theme = useTheme();


    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleOpenMem = (event) => {
        setAnchorEl1(anchorEl1 ? null : event.currentTarget);
    };


    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleOpenDate = (event) => {
        setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    };


    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popper' : undefined;

    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popper' : undefined;

    const [options, setoptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })





    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);


    const [destination, setDestination] = useState("");

    const location = useLocation();
    console.log(location.state);


    useEffect(() => {
        if (location.state != null) {
            // console.log("NO");
            // setisLoggedIn(true);
            setoptions(location.state.options);
            setDestination(location.state.destination);
            setDate(location.state.date);

        }

        // return () => {
        //   second
        // }
    }, [])


    // const [options, setoptions] = useState(location.state.options)
    // const [date, setDate] = useState(location.state.date)
    // const [destination, setDestination] = useState(location.state.destination)

    const handleOption = (name, operation) => {

        setoptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
            }
        })

    }

    const [query, setquery] = useState("");
    const handleQuery = (e) => {
        setquery(e.target.value);
    }


    const handleDestination = (event) => {
        setDestination(event.target.value);
        setquery(destination);
    };

    console.log(query);

    // useEffect(() => {


    // //   return () => {
    // //     second
    // //   }
    // }, [query])


    // const [form, setState] = useState({
    //     destination: '',
    //     price: '',
    //     password: ''
    // });



    // const printValues = e => {
    //     e.preventDefault();
    //     console.log(form.fullName, form.email, form.password);
    //     const registerd = {
    //         fullName: form.fullName,
    //         email: form.email,
    //         password: form.password
    //     }
    // };


    // const updateField = e => {
    //     setState({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     });
    // };




    return (
        <Box sx={{
            // display: 'flex',
            // flexDirection: 'column',
            // width: '100vw',
            // alignItems: 'center',
            // justifyContent: 'center',
        }} >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                backgroundColor: theme.palette.common.white,
                borderRadius: '0.5em',
                justifyContent: 'end',
                alignItems: 'space-around'
            }} >
                <Box
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #2948ff45, #f2fcfe1a), url(${island})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        padding: 0,
                        height: '250px',
                        width: '100%',
                        alignItems: 'center',
                        // alignItems: 'center',
                        // justifyContent: 'center'
                    }} >
                    <CustomNavbar />
                    <Box sx={{
                        // display: 'flex',
                        // width: '100px',
                        // marginLeft: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // height: '100vh',
                    }}>
                        {/* <CustomTabs /> */}


                        <TextField variant="standard" id="margin-normal" margin="normal" sx={{
                            width: "1000px", borderRadius: '5px'
                            // backgroundColor: 
                        }} inputProps={{ style: { color: "black", backgroundColor: 'White', padding: '10px', borderRadius: '5px' } }} onChange={handleQuery}
                            placeholder="Enter Destination" value={destination} />





                    </Box>
                    {/* <Header /> */}
                    {/* {`${options.adult} adult  /  ${options.children} children  /  ${options.room} room`} */}
                    {/* {`${format(date[0].startDate, "dd/MM/yyyy",)}`} */}


                </Box>





                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'start',
                        width: '100%',
                        // padding: '1em',

                        // height: '100vh',
                        backgroundColor: theme.palette.common.red,
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        padding: 10
                    }} >
                    <Box sx={{
                        backgroundColor: theme.palette.secondary.light,
                        display: 'flex',
                        flexDirection: 'column',
                        width: '350px',
                        // paddingBottom: '1em',
                        borderRadius: '10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // padding: '1em',
                        marginTop: '1em',
                        marginLeft: '1em',
                        padding: 2

                        // boxShadow: '10px 10px 11px - 4px #000000a6'
                    }}
                        boxShadow={6}

                    >

                        {/* <CustomTextField sx={{
                            backgroundColor: theme.palette.common.white,
                            margin: 2,
                            borderRadius: 0,
                            // width: '380px',
                            // minWidth: '300px',
                            marginBottom: 1

                        }}
                            placeholder="where to go"
                            // onChange={handleChange}

                            icon={<PlaceIcon
                                sx={{
                                    color: theme.palette.secondary.main,

                                }}

                            />}
                            handleChange={handleChange}
                            value={destination}


                        /> */}

                        <TextField variant="standard" sx={{
                            maxWidth: '300px    ',
                            width: "100%", borderRadius: '0em',
                            marginBottom: '10px',
                            marginTop: '10px'

                            // backgroundColor: 
                        }} inputProps={{ style: { color: "black", backgroundColor: 'White', padding: '10px', borderRadius: '0px' } }}

                            // onChange={(e => setquery(e.target.value))}

                            placeholder="Enter Destination" value={destination} onChange={handleDestination} />


                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}    >
                            {/* <DatePick /> */}



                            <Box sx={{
                                display: "flex",
                                height: '48px',
                                maxWidth: '270px',
                                backgroundColor: theme.palette.common.white,
                                paddingLeft: 2,
                                paddingRight: 2,
                                alignItems: "center",
                                justifyContent: 'center',
                            }}
                                // onClick={() => setopenDate(!openDate)}
                                onClick={handleOpenDate}

                            >
                                <DateRangeIcon
                                    sx={{
                                        marginRight: 2,
                                        color: theme.palette.secondary.main,

                                    }}

                                />
                                <Typography variant='h6' component='h6' sx={{
                                    fontFamily: theme.typography.body1,
                                    color: theme.palette.secondary.dark,
                                    fontSize: '14px'

                                }}>
                                    {`${format(date[0].startDate, "dd/MM/yyyy",)}`}
                                    {/* {`${format(parentToChild[0].startDate, "dd/MM/yyyy",)}`} */}
                                </Typography>

                                <CompareArrowsIcon sx={{
                                    marginLeft: 2,
                                    marginRight: 2,
                                    color: theme.palette.secondary.main,

                                }} />

                                <DateRangeIcon
                                    sx={{
                                        marginRight: 2,
                                        color: theme.palette.secondary.main,
                                        height: '20px'
                                    }}
                                />

                                <Typography variant='h6' component='h6' sx={{
                                    fontFamily: theme.typography.body1,
                                    color: theme.palette.secondary.dark,
                                    fontSize: '14px'


                                }}>

                                    {`${format(date[0].endDate, "dd/MM/yyyy",)}`}
                                    {/* {`${format(parentToChild[0].endDate, "dd/MM/yyyy",)}`} */}
                                </Typography>

                            </Box>


                            <Popper id={id2} open={open2} anchorEl={anchorEl2}>
                                <DateRange
                                    onChange={item => {
                                        setDate([item.selection]);
                                        // parentCallback(date);
                                    }

                                    }
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    // width={['200px']}
                                    rangeColors={[theme.palette.secondary.light]}
                                />
                            </Popper>



                            <Box className="details" sx={{
                                display: "flex",
                                // width: "400px",
                                // maxWidth: '280px',
                                width: '270px',

                                height: '48px',
                                backgroundColor: theme.palette.common.white,
                                paddingLeft: 2,
                                paddingRight: 2,
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop: '10px'
                            }}
                                onClick={handleOpenMem}
                            // onClick={() => setopenOption(!openOption)}

                            >
                                <PersonIcon
                                    sx={{
                                        marginRight: 2,
                                        color: theme.palette.secondary.main,
                                        height: '20px'


                                    }}

                                />
                                <Typography variant='h6' component='h6' sx={{
                                    fontFamily: theme.typography.body1,
                                    color: theme.palette.secondary.dark,
                                    fontSize: '14px'
                                }}>

                                    {/* {`${parentToChild.adult} adult  /  ${parentToChild.children} children  /  ${parentToChild.room} room`} */}

                                    {`${options.adult} adult  /  ${options.children} children  /  ${options.room} room`}
                                </Typography>


                                <Popper id={id1} open={open1} anchorEl={anchorEl1}>
                                    <Box className="IncBtn" sx={{
                                        backgroundColor: theme.palette.common.white,
                                        // width: "300px"
                                    }} >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                '& > *': {
                                                    m: 1,
                                                },
                                            }}
                                        >
                                            <ButtonGroup variant="text" aria-label="text button group" >
                                                <Button sx={{ color: theme.palette.secondary.dark }}>Adult</Button>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginLeft: 5,
                                                }}>

                                                    <Button sx={{ color: theme.palette.secondary.dark }} startIcon={<AddIcon />} onClick={() => handleOption("adult", "i")} />
                                                    <Button>{`${options.adult}`}</Button>
                                                    <Button sx={{ color: theme.palette.secondary.dark }} disabled={options.adult === 1} startIcon={<RemoveIcon />} onClick={() => handleOption("adult", "d")} />
                                                </Box>

                                            </ButtonGroup>
                                        </Box >


                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                '& > *': {
                                                    m: 1,
                                                },
                                            }}
                                        >
                                            <ButtonGroup variant="text" aria-label="text button group" sx={{
                                                alignItems: 'center',
                                            }}>
                                                <Button sx={{ color: theme.palette.secondary.dark }}>Children</Button>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginLeft: 2,
                                                }}>


                                                    <Button sx={{ color: theme.palette.secondary.dark }} startIcon={<AddIcon />} onClick={() => handleOption("children", "i")} />

                                                    <Button >{`${options.children}`}</Button>
                                                    <Button sx={{ color: theme.palette.secondary.dark }} disabled={options.children === 1} startIcon={<RemoveIcon />} onClick={() => handleOption("children", "d")} />
                                                </Box>
                                            </ButtonGroup>
                                        </Box >


                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                // '& > *': {
                                                //   m: 1,
                                                // },
                                            }}
                                        >
                                            <ButtonGroup variant="text" aria-label="text button group" sx={{
                                                alignItems: 'center',
                                            }}>
                                                <Button sx={{ color: theme.palette.secondary.dark }}>Room</Button>


                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginLeft: 6,


                                                }}>
                                                    <Button sx={{ color: theme.palette.secondary.dark }} startIcon={<AddIcon />} onClick={() => handleOption("room", "i")} />
                                                    <Button>{`${options.room}`}</Button>
                                                    <Button sx={{ color: theme.palette.secondary.dark }} disabled={options.room === 1} startIcon={<RemoveIcon />} onClick={() => handleOption("room", "d")} />
                                                </Box>
                                            </ButtonGroup>
                                        </Box >

                                    </Box>
                                </Popper>


                            </Box>



                            {/* <Typography variant="h6" align='left' gutterBottom style={{ color: theme.palette.common.white, }} >
                                Options
                            </Typography> */}

                            {/* <CustomTextField placeholder='Maximum Price' /> */}
                            {/* <CustomTextField placeholder='Mminimum Price' /> */}

                            <TextField variant="standard" id="margin-normal" margin="normal" sx={{
                                maxWidth: '300px',
                                width: "100%", borderRadius: '0em',
                                // backgroundColor: 
                            }} inputProps={{ style: { color: "black", backgroundColor: 'White', padding: '10px', borderRadius: '0px' } }}

                                // onChange={(e => setquery(e.target.value))}

                                placeholder="Maximum Price" />

                            <TextField variant="standard" id="margin-dense" margin="dense" sx={{
                                maxWidth: '300px',
                                width: "100%", borderRadius: '0em',
                                // backgroundColor: 
                            }} inputProps={{ style: { color: "black", backgroundColor: 'White', padding: '10px', borderRadius: '0px' } }}

                                // onChange={(e => setquery(e.target.value))}

                                placeholder="Minimum Price" />




                            <Button
                                size="small"
                                sx={{
                                    color: theme.palette.common.white,
                                    backgroundColor: theme.palette.primary.contrastText,
                                    "&:hover": {
                                        backgroundColor: theme.palette.common.white,
                                        color: theme.palette.secondary.dark,
                                    },
                                    transition: "0.3s",
                                    padding: 2.2,

                                }}
                                startIcon={<SearchIcon />}
                            // onClick={handleSearch}

                            >
                                Search
                            </Button>



                        </Box>




                    </Box>


                    {/* <ImageListV2 /> */}

                    <CardSection query={query} />



                    {/* <Card
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '350px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginTop: -5

                        }}> */}
                    {/* <CardContent> */}



                    {/* </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card> */}



                </Box>



            </Box>
            <Box
                style={{
                    backgroundImage: `linear-gradient(to bottom, #2948ff45, #f2fcfe1a), 
          url(${island})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',

                }} >

                <FooterP1 />

            </Box>
            <FooterP2 />

        </Box >


    )
}

export default Search