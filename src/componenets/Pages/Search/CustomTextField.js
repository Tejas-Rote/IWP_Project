import { Box, createTheme, TextField, ThemeProvider, styled, useTheme, InputAdornment } from '@mui/material';
import React from 'react';
import theme from '../../../util/Themes/theme';
import PlaceIcon from '@mui/icons-material/Place';



// const theme = createTheme({
//     typography: {
//         fontFamily: 'poppins',
//         fontSize: 16
//     }


// })

const Custom_TextField = styled(TextField)({
    input: {
        color: theme.palette.common.black
    },
    '& label.Mui-focused': {
        color: theme.palette.common.black,

    },
    '& label': {
        color: theme.palette.common.black
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            // borderColor: '#444444',
            borderColor: '#EDEDED',

            borderWidth: 0
        },
        '&:hover fieldset': {
            borderColor: '#DA0037',
            borderWidth: 0

        },
        '&.Mui-focused fieldset': {
            borderColor: '#DA0037',
            borderWidth: 0

        },
    },
});


const CustomTextField = ({ placeholder, icon }) => {
    const theme = useTheme();

    return (
        // <ThemeProvider theme={theme}>
        <Box id="About" sx={{

            display: "flex",
            width: {
                lg: 500,
                sm: 350,
                xs: 250,
            },

            // backgroundColor: "#171717",
            backgroundColor: theme.palette.common.white,

            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            // padding: 10,
            margin: 3,
            // marginTop: 5,
            // marginBottom: 5

        }}>

            <Custom_TextField
                // label={label} variant="outlined"
                placeholder={placeholder}
                fullWidth={true}
                style={{
                    height: {
                        lg: 100,
                        sm: 70,
                    },
                }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        {icon}
                        {/* <PlaceIcon sx={{
                            color: theme.palette.secondary.dark,
                        }} /> */}
                    </InputAdornment>,
                }}

            />
        </Box>
        // </ThemeProvider>




    );
}
export default CustomTextField;