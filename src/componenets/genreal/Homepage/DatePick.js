import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Typography, useTheme } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from 'react-date-range';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


import { format } from "date-fns"
import { useState } from 'react';

export default function DatePick({ parentCallback }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);


    // console.log(date);
    // console.log(parentToChild);

    // const [openDate, setopenDate] = useState(false)


    const theme = useTheme();
    return (
        <div>
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
                onClick={handleClick}

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


            <Popper id={id} open={open} anchorEl={anchorEl}>
                <DateRange
                    onChange={item => {
                        setDate([item.selection]);
                        parentCallback(date);
                    }

                    }
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    width={['200px']}
                    rangeColors={[theme.palette.secondary.light]}
                />
            </Popper>
        </div>
    );
}
