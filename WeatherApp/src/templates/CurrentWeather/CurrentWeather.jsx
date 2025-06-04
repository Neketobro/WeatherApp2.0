import { Box, Typography, Paper } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectValue } from "@store";
import { WeatherIcon, AdditionalInfo, CurrentWeatherLoading } from "./index";
import { TextInComponents } from '@components';

export function CurrentWeather() {
    const data = useSelector(selectValue);

    return (
        <>
            {data && data.currently && Object.keys(data).length > 0 ? (
                <Paper elevation={2} sx={{ height: '70vh', width: '20vw', borderRadius: '50px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TextInComponents text={data.currently.name} fontSize='1rem' textVariant='h3' textAlign='center' fontWeight='bold' textStyle />
                    <Box sx={{ width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: 2 }}>
                        <WeatherIcon weatherStatus={data.currently.weather[0].main} />
                        <TextInComponents text={data.currently.main.temp} fontSize='1rem' textVariant='h3' textAlign='center' fontWeight='bold' textStyle />
                        <Typography fontWeight='bold' fontStyle='italic' fontSize='1.5rem' color="text.secondary" sx={{ letterSpacing: 2 }}>
                            {data.currently.weather[0].description}
                        </Typography>
                    </Box>
                    <AdditionalInfo main={data.currently.main} wind={data.currently.wind} />
                </Paper>
            ) : (
                <CurrentWeatherLoading />
            )}
        </>
    )
}