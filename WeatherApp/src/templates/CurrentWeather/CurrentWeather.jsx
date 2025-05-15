import { Box, Skeleton, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectValue } from "@store";

export function CurrentWeather({ data }) {
    const value = useSelector(selectValue);
    
    console.log('value -> ', value);
    

    // console.log('data -> ', data);
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