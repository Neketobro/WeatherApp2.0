import { Typography } from "@mui/material";

export function CityName({ cityName }) {
    return (
        <Typography variant="h3" fontWeight="bold" textAlign='center' fontSize='1rem'>
            {cityName}
        </Typography>
    )
}