import { Typography } from "@mui/material";

export function MainText({ text }) {
    return (
        <Typography variant="h3" fontWeight="bold" textAlign='center' fontSize='1rem'>
            {typeof text === 'number' ? `${Math.round(text)}°С` : text}
        </Typography>
    )
}