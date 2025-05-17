import { Box, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from "@store";
import { weatherFetch } from "@store";
import { useEffect } from "react";
import { CityName } from "./CityName";

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
            {/* <Box sx={{ background: 'red' }}>
                {name ? (<Typography>
                    {name}
                </Typography>) : (
                    <Skeleton variant="rounded" width={210} height={60} />
                )}
            </Box> */}
            {/* <Box>
                <Skeleton variant="rounded" width={210} height={60} />
            </Box> */}
        </>
    )
}