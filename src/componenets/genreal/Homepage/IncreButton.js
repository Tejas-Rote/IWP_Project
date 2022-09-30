import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, useTheme } from '@mui/material';
export default function IncreButton({ label }) {
    const theme = useTheme();

    return (
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
                <AddIcon />
                <Button>Adult</Button>
                <RemoveIcon />
            </ButtonGroup>
        </Box >
    );
}
