import { Box, Typography } from "@mui/material";
import { CollapseButton, ThemeButton } from './index.js';

export function Header() {
    return (
        <Box sx={{ background: 'red', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CollapseButton />
            <Typography variant="h4" textAlign='center' sx={{ fontWeight: 'bold' }}>Weather forecast</Typography>
            <ThemeButton />
        </Box>
    )
}