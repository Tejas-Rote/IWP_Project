import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Drawer } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
// import HotelIcon from '@mui/icons-material/Hotel';
// import FlightIcon from '@mui/icons-material/Flight';
// import CarRentalIcon from '@mui/icons-material/CarRental';
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
// import AttractionsIcon from '@mui/icons-material/Attractions';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

const drawerWidth = 240;
// const navItems    = ['Stay', 'Flights', 'Car Rental', 'Airport Taxis', 'Attraction'];
// const navItems =[
//     {
//         label: 'Stay',
//         icon: <HotelIcon />,
//     },
//     {
//         label: 'Flights',
//         icon: <FlightIcon />,
//     },
//     {
//         label: 'Car Rental',
//         icon: <CarRentalIcon />,
//     },
//     {
//         label: 'Airport Taxis',
//         icon: <LocalTaxiIcon />,
//     },
//     {
//         label: 'Attraction',
//         icon: <AttractionsIcon />,
//     }
// ]

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {props.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {props.map((item) => (
                           

                            <Button key={item.label} sx={{ color: '#fff' }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
