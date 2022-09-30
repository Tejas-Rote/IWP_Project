import { createTheme } from "@mui/material";


const overrides = {
  MuiTab: {
    // general overrides for your material tab component here
    root: {
      backgroundColor: 'red',
      '&$selected': {
        backgroundColor: 'blue',
      }
    },
  },
};



const theme = createTheme({
  overrides,
  palette: {
    // secondary: {
    //   main: "#30475E",
    //   light: "#DDDDDD",
    //   dark: "#222831",
    //   contrastText: "#F05454"
    // },

    // secondary: {
    //   main: "#03506F",
    //   light: "#BBBBBB",
    //   dark: "#0A043C",
    //   contrastText: "#FFE3D8"
    // },

    common: {
      black: "#00171F",
      white: "#FFFFFF",
    },
    secondary: {
      main: "#007EA7",
      light: "#00A8E8",
      dark: "#003459",
      contrastText: "#FFE3D8"
    },

    primary: {
      main: '#99B898',
      light: "#FF847C",
      dark: "#2A363B",
      contrastText: "#F05454"

    },
    // typography: {
    //   fontFamily: 'poppins',
    //   fontSize: 16
    // }
  },

});
export default theme; 