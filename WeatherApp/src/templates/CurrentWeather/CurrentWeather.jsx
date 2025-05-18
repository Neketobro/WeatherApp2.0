import { Box, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from "@store";
import { weatherFetch } from "@store";
import { useEffect } from "react";
import { CityName, WeatherIcon } from "./index";

export function CurrentWeather() {
    const data = useSelector(selectValue);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherFetch('Hello'));
    }, [dispatch]);
    const { name, weather } = data;
    console.log('data after -> ', data);

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <>
                    <CityName cityName={name} />
                    <Box sx={{ width: '100%', height: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, paddingBlock: '2vh' }}>
                        <WeatherIcon weatherStatus={weather[0].main} />
                        Temp
                    </Box>
                    
                </>
            ) : (
                <>
                    <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Skeleton variant="rounded" width={200} height={40} />
                    </Box>
                    <Box sx={{ width: '100%', height: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBlock: '2vh' }}>
                        <Skeleton variant="circular" width='14vw' height='14vw' />
                    </Box>
                </>
            )}
        </>
    )
}

