// import { Box, Button, ButtonGroup, Popover, Popper, Stack, Typography, useTheme } from '@mui/material'
// import React, { useCallback, useState } from 'react'
// import CustomTextField from './CustomTextField';
// import './CustomSearch.css'



// import PlaceIcon from '@mui/icons-material/Place';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import SearchIcon from '@mui/icons-material/Search';



// import { DateRange } from 'react-date-range';
// import { format } from "date-fns"
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import DatePick from '../genreal/Homepage/DatePick';
// import MemberPick from '../genreal/Homepage/MemberPick';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const CustomSearch = () => {

//   const [options, setoptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1
//   })


//   // const handleOption = (name, operation) => {
//   //   // const newValue = prev => {
//   //   //   return {
//   //   //     ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
//   //   //   }
//   //   // }
//   //   setoptions(prev => {
//   //     return {
//   //       ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
//   //     }
//   //   })

//   //   // setoptions(newValue);


//   // }

//   const theme = useTheme();

//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection"
//     }
//   ]);


//   const callBackOptions = useCallback(
//     (options) => {
//       setoptions(options);
//     },
//     [],
//   )

//   const callBackDate = useCallback(
//     (date) => {
//       setDate(date);
//     },
//     [],
//   )




//   // const [date, setDate] = useState([
//   //   {
//   //     startDate: new Date(),
//   //     endDate: new Date(),
//   //     key: "selection"
//   //   }
//   // ]);


//   // const callBackDate = useCallback((date) => {
//   //   setoptions(date);
//   // }, []);

//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate("/search", { state: { options } })
//     // return (
//     //   <Link to="/search" >
//     //     <Button>
//     //       Hi
//     //     </Button>
//     //   </Link>
//     // );
//   }


//   // const handleSearch = () => {
//   //   navigate("/search")
//   // }
//   // console.log(options);




//   // useEffect(() => {
//   //   setoptions(window.localStorage.getItem('options'));
//   // }, []);

//   // useEffect(() => {
//   //   window.localStorage.setItem('options', options);
//   // }, [options]);



//   return (
//     <Box>
//       <Box sx={{
//         display: 'flex',
//         height: '100px',
//         alignItems: 'center',
//         justifyContent: 'space-around'

//       }}>
//         <CustomTextField
//           // placeholder="where to go"
//           icon={<PlaceIcon
//             sx={{
//               color: theme.palette.secondary.main,

//             }}

//           />}
//         />
//         <Box sx={{
//           display: 'flex',
//           flexDirection: "column",
//           witdth: '300px',
//           alignItems: 'center',
//           justifyContent: 'space-around'
//         }}>
//           <DatePick parentCallback={callBackDate} />



//         </Box>



//         <MemberPick parentCallback={callBackOptions} options={options} setoptions={setoptions} />


//         {/* <Link to={{
//           pathname: "/search",
//           state: options
//         }}> */}

//         <Button
//           size="small"
//           sx={{
//             color: theme.palette.secondary.contrastText,
//             backgroundColor: theme.palette.secondary.main,
//             "&:hover": {
//               backgroundColor: theme.palette.secondary.contrastText,
//               color: theme.palette.secondary.main,
//             },
//             transition: "0.3s",
//             padding: 2.2,

//           }}
//           startIcon={<SearchIcon />}
//           onClick={handleSearch}

//         >
//           Search
//         </Button>
//         {/* </Link> */}
//       </Box>
//     </Box >
//   )
// }

// export default CustomSearch



import { Box, Button, ButtonGroup, Popover, Popper, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useCallback, useState } from 'react'
import CustomTextField from './CustomTextField';
import './CustomSearch.css'



import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';



import { DateRange } from 'react-date-range';
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePick from '../genreal/Homepage/DatePick';
import MemberPick from '../genreal/Homepage/MemberPick';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CustomSearch = () => {

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

  const handleOption = (name, operation) => {

    setoptions(prev => {
      return {
        ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
      }
    })

  }

  const theme = useTheme();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);


  const [destination, setDestination] = useState("");
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };



  console.log(destination);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    navigate("/search", { state: { date, options, destination } });
  };


  console.log(location.state);
  // useEffect(() => {
  //   if (location.state != null) {
  //     // console.log("NO");
  //     setisLoggedIn(true);
  //     setName(location.state.fullName);
  //   }

  //   // return () => {
  //   //   second
  //   // }
  // }, [])


  return (
    <Box>
      <Box sx={{
        display: 'flex',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'space-around'

      }}>
        {/* <CustomTextField
          placeholder="where to go"
          // onChange={handleChange}
          icon={<PlaceIcon
            sx={{
              color: theme.palette.secondary.main,

            }}

          />}
          onChange={handleChange}
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
          witdth: '300px',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}    >
          {/* <DatePick /> */}



          <Box sx={{
            display: "flex",
            height: '56px',
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
              }}
            />

            <Typography variant='h6' component='h6' sx={{
              fontFamily: theme.typography.body1,
              color: theme.palette.secondary.dark,

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
              width={['200px']}
              rangeColors={[theme.palette.secondary.light]}
            />
          </Popper>



        </Box>



        {/* <MemberPick parentCallback={callBackOptions} handleOption={handleOption} options={options} setoption={setoptions} /> */}

        <Box className="details" sx={{
          display: "flex",
          // width: "400px",
          height: '56px',
          backgroundColor: theme.palette.common.white,
          paddingLeft: 2,
          paddingRight: 2,
          alignItems: "center",
          justifyContent: 'center',
        }}
          onClick={handleOpenMem}
        // onClick={() => setopenOption(!openOption)}

        >
          <PersonIcon
            sx={{
              marginRight: 2,
              color: theme.palette.secondary.main,

            }}

          />
          <Typography variant='h6' component='h6' sx={{
            fontFamily: theme.typography.body1,
            color: theme.palette.secondary.dark,
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

































        <Button
          size="small"
          sx={{
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.contrastText,
              color: theme.palette.secondary.main,
            },
            transition: "0.3s",
            padding: 2.2,

          }}
          startIcon={<SearchIcon />}
          onClick={handleSearch}

        >
          Search
        </Button>
        {/* </Link> */}
      </Box>
    </Box >
  )
}

export default CustomSearch