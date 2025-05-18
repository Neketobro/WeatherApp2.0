import { Box, Skeleton, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from "@store";
import { weatherFetch } from "@store";
import { useEffect } from "react";
import { MainText, WeatherIcon, AdditionalInfo } from "./index";

export function CurrentWeather() {
    const data = useSelector(selectValue);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherFetch('Hello'));
    }, [dispatch]);
    const { name, weather, main, wind } = data;
    console.log('data after -> ', data);

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <>
                    <MainText text={name} />
                    <Box sx={{ background: 'lightyellow', width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: 2, marginBlock: '2vh' }}>
                        <WeatherIcon weatherStatus={weather[0].main} />
                        <MainText text={main.temp} />
                        <Typography fontWeight='bold' fontStyle='italic' fontSize='1.5rem' color="text.secondary" sx={{ letterSpacing: 2 }}>
                            {weather[0].description}
                        </Typography>
                    </Box>
                    <AdditionalInfo main={main} wind={wind} />
                </>
            ) : (
                <>
                    <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Skeleton variant="rounded" width={200} height={40} />
                    </Box>
                    <Box sx={{ width: '100%', height: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, paddingBlock: '2vh' }}>
                        <Skeleton variant="circular" width='14vw' height='14vw' />
                        <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Skeleton variant="rounded" width={200} height={40} />
                        </Box>
                        <Skeleton variant="rounded" width={200} height={40} />
                    </Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={6}>
                            <Skeleton variant="rounded" width={150} height={60} />
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rounded" width={150} height={60} />
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rounded" width={150} height={60} />
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rounded" width={150} height={60} />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

/************
 *  Time
 ************/
// function digitalClock() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     let string = hours + ":" + minutes;

//     document.getElementById('wrapperLocationTime').innerHTML = string;
// } setInterval(digitalClock, 1000);

/************
 *  Date
 ************/
// function digitalDate() {
//     let now = new Date();
//     let day = now.getDate();

//     let dayOfWeek = now.getDay(); // получение дня недели (0-6)
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let dayName = days[dayOfWeek]; // получение названия дня недели

//     let month = now.toLocaleString('en-US', { month: 'short' });
// //  console.log(month); // Например: "Sep"

//     dayName = dayName < 10 ? "0" + dayName : dayName;
//     day = day < 10 ? "0" + day : day;
//     month = month < 10 ? "0" + month : month;

//     let string = dayName + ", " + day + " " + month;

//     document.getElementById('wrapperLocationDate').innerHTML = string;
// } setInterval(digitalDate, 2000);