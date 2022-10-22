import './App.css';

import { createTheme, ThemeProvider } from '@mui/material';
import theme from './util/Themes/theme';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import CustomNavbar from './componenets/genreal/CustomNavbar';

// import Header from './componenets/genreal/Header';
// import CustomCard from './componenets/genreal/CustomCard';
// import CardSection from './componenets/genreal/CardSection';
// import HomePage from './componenets/genreal/HomePage';
// import CustomNavbar2 from './componenets/genreal/CustomNavbar2';
// import HotelIcon from '@mui/icons-material/Hotel'; 
// import FlightIcon from '@mui/icons-material/Flight';
// import CarRentalIcon from '@mui/icons-material/CarRental';
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
// import AttractionsIcon from '@mui/icons-material/Attractions';
import HomePageV1 from './componenets/genreal/Homepage/HomePageV1';
import Search from "./componenets/genreal/Searchpage/Search";
import Login from './componenets/genreal/AuthPage/Login';
import Register from './componenets/genreal/AuthPage/Register';
import Book from './componenets/genreal/Booking/Book';
// import CustomSearch from './componenets/genreal/Homepage/CustomSearch';










// const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#006400"
//       },
//       secondary: {
//         main: "#ffa500"
//       }
//     }
//   });

// const first = ""


// const navItems =[
//   {
//       label: 'Stay',
//       icon: <HotelIcon />,
//   },
//   {
//       label: 'Flights',
//       icon: <FlightIcon />,
//   },
//   {
//       label: 'Car Rental',
//       icon: <CarRentalIcon />,
//   },
//   {
//       label: 'Airport Taxis',
//       icon: <LocalTaxiIcon />,
//   },
//   {
//       label: 'Attraction',
//       icon: <AttractionsIcon />,
//   }
// ]



// const navItems =[
//   {
//       label: 'Stay',
//       // icon: <HotelIcon />,
//   },
//   {
//       label: 'Flights',
//       // icon: <FlightIcon />,
//   },
//   {
//       label: 'Car Rental',
//       // icon: <CarRentalIcon />,
//   },
//   {
//       label: 'Airport Taxis',
//       // icon: <LocalTaxiIcon />,
//   },
//   {
//       label: 'Attraction',
//       // icon: <AttractionsIcon />,
//   }
// ]



function App() {
  return (

    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageV1 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />


        </Routes>
      </BrowserRouter>
      <div >
        {/* <HomePage />   */}
        {/* <HomePageV1 />/ */}
        {/* <Search /> */}
        {/* <CustomSearch /> */}
        {/* <CustomNavbar /> */}
        {/* <CustomNavbar2 items={navItems} /> */}

        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <CardSection /> */}

      </div>
    </ThemeProvider>
    //   
  );
}

export default App;