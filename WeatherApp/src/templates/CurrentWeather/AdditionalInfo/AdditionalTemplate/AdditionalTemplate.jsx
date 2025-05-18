import { Box, Typography } from "@mui/material";

export function AdditionalTemplate({ text, title, icon }) {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</Box>
            <Box>
                <Typography color="text.secondary" fontWeight='bold' sx={{ letterSpacing: 2 }}>{title}</Typography>
                <Typography textAlign='center'>{text}</Typography>
            </Box>
        </Box>
    )
}