// import { Box, Tab, Tabs, useTheme } from '@mui/material';
// import * as React from 'react';
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';
// // import Box from '@mui/material/Box';
// import HotelIcon from '@mui/icons-material/Hotel';
// import FlightIcon from '@mui/icons-material/Flight';
// import CarRentalIcon from '@mui/icons-material/CarRental';

// import AttractionsIcon from '@mui/icons-material/Attractions';
// export default function CustomTabs() {
//     const [value, setValue] = React.useState('one');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     const theme = useTheme();

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 textColor="secondary"
//                 indicatorColor=''
//                 aria-label="secondary tabs example"
//             >
//                 <Tab icon={<HotelIcon />} value="one" label="Hotel" />
//                 <Tab icon={<FlightIcon />} value="two" label="Flight" />
//                 <Tab icon={<CarRentalIcon />} value="three" label="Item Three" />
//             </Tabs>
//         </Box >
//     );
// }


import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useTheme } from '@mui/material';
import theme from '../../util/Themes/theme';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  &:hover {
    ${'' /* background-color: ${blue[400]}; */}
    border-radius: 80px;

    background-color: ${theme.palette.secondary.light};

  }

  &:focus {
    color: #fff;
    border-radius: 80px;
    border-color: ${theme.palette.primary.contrastText};
    outline: 2px solid ${theme.palette.secondary.contrastText};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    ${'' /* background-color:${theme.palette.secondary.light}; */}
    background-color:transparent;

    color: ${theme.palette.primary.contrastText};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  ${'' /* font-family: IBM Plex Sans, sans-serif; */}
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: transparent;
  border-radius:40px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
    const theme = useTheme();
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>STAY</Tab>
                <Tab>FLIGHT</Tab>
                <Tab>RENTAL</Tab>
                <Tab>ATTRACTIONS</Tab>
                <Tab>Three</Tab>


            </TabsList>
            {/* <TabPanel value={0}>First page</TabPanel>
            <TabPanel value={1}>Second page</TabPanel>
            <TabPanel value={2}>Third page</TabPanel>
            <TabPanel value={3}>Third page</TabPanel> */}




        </TabsUnstyled>
    );
}

