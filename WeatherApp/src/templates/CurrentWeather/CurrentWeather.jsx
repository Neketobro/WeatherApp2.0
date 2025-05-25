import { Box, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from "@store";
import { weatherFetch } from "@store";
import { useEffect } from "react";
import { MainText, WeatherIcon, AdditionalInfo, CurrentWeatherLoading } from "./index";

export function CurrentWeather() {
    const data = useSelector(selectValue);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherFetch('Hello'));
    }, [dispatch]);

    console.log('data after -> ', data);

    return (
        <>
            {data && Object.keys(data).length > 0 ? (
                <Paper elevation={2} sx={{ height: '70vh', width: '20vw', borderRadius: '50px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <MainText text={data.name} />
                    <Box sx={{ width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: 2 }}>
                        <WeatherIcon weatherStatus={data.weather[0].main} />
                        <MainText text={data.main.temp} />
                        <Typography fontWeight='bold' fontStyle='italic' fontSize='1.5rem' color="text.secondary" sx={{ letterSpacing: 2 }}>
                            {data.weather[0].description}
                        </Typography>
                    </Box>
                    <AdditionalInfo main={data.main} wind={data.wind} />
                </Paper>
            ) : (
                <CurrentWeatherLoading />
            )}
        </>
    )
}