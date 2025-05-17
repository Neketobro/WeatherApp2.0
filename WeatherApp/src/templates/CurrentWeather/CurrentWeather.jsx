import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from "@store";
import { weatherFetch } from "@store";
import { useEffect } from "react";
import { CityName, WeatherIcon } from "./index";

export function CurrentWeather() {
    const data = useSelector(selectValue);
    const dispatch = useDispatch();


    // dispatch(weatherFetch('123'))
    useEffect(() => {
        dispatch(weatherFetch('Hello'));
    }, [dispatch]);

    const { name } = data;

    console.log('data -> ', data);

    return (
        <>
            <CityName cityName={name} />
            <Box sx={{ background: 'yellow', width: '100%', height: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBlock: '2vh' }}>
                <WeatherIcon />
            </Box>
        </>
    )
}