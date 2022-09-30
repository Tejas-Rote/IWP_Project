import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Button, ButtonGroup, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import useDidMountEffect from '../../../util/hooks/useDidMountEffect'



// const useDidMountEffect = (func, deps) => {
//   const didMount = React.useRef(false);

//   useEffect(() => {
//     if (didMount.current) {
//       func();
//     } else {
//       didMount.current = true;
//     }
//   }, deps);
// };










export default function MemberPick({ parentCallback, options, setoptions }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  // const locations = useLocation();
  // console.log(locations);

  // const [options, setoptions] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1
  // })

  // const [options, setoptions] = useState(options)

  // console.log(locations.state)

  const handleOption = (name, operation) => {
    const newValue = prev => {
      return {
        ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
      }
    }
    // setoptions(prev => {
    //   return {
    //     ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
    //   }
    // })

    setoptions(newValue);
    parentCallback(newValue);

  }

  // console.log(options);


  // const didMount = React.useRef(false);


  // useEffect(() => {
  //   if (didMount.current) {
  //     // setoptions(locations.state.options)
  //     console.log("hello")

  //   } else {
  //     didMount.current = true;
  //   }


  //   // return () => {
  //   //   second
  //   // }
  // }, [locations])


  // useEffect(() => {
  //   setoptions(locations.state.options)

  //   // return () => {
  //   //   second
  //   // }
  // }, [])


  // useEffect(() => {
  //   if (didMount.current) {
  //     setoptions(locations.state.options)
  //   } else {
  //     didMount.current = true;
  //   }

  //   // return () => {
  //   //   second
  //   // }

  //   // eslint-disable-next-line
  // }, [])


  // useDidMountEffect(() => {
  //   setoptions(locations.state.options)

  //   // return () => {
  //   //   second
  //   // } 
  // }, [])





  // 
  // console.log(parentToChild);




  const theme = useTheme();
  return (

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
      onClick={handleClick}
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

      {/* {openOption && <Box className="IncBtn" sx={{
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
            </Box>} */}

      <Popper id={id} open={open} anchorEl={anchorEl}>
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


          {/* <Box
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
          </Box > */}


          {/* <Box
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
          </Box > */}
        </Box>
      </Popper>


    </Box>


    // <div>
    //     <button aria-describedby={id} type="button" onClick={handleClick}>
    //         Toggle Popper
    //     </button>
    //     <Popper id={id} open={open} anchorEl={anchorEl}>
    //         <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
    //             The content of the Popper.
    //         </Box>
    //     </Popper>
    // </div>
  );
}
