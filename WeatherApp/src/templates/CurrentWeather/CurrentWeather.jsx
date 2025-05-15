import { Box, Skeleton, Typography } from "@mui/material";

export function CurrentWeather({ data }) {

    console.log('data -> ', data);
    const { cityName, temperature, weatherIcon, windSpeed, humidity } = data;

    return (
        <>
            <Box sx={{ background: 'red' }}>
                {cityName ? (<Typography>
                    {cityName}
                </Typography>) : (
                    <Skeleton variant="rounded" width={210} height={60} />
                )}
            </Box>
            {/* <Box>
                <Skeleton variant="rounded" width={210} height={60} />
            </Box> */}
        </>
    )
}

// cityName
// temperature
// weatherIcon
// windSpeed
// humidity