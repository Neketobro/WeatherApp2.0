import { Box, Paper } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectValue } from "@store";
import { AdditionalInfo, CurrentWeatherLoading } from "./index";
import { TextInComponents, WeatherIcon, FavoriteActionButton } from '@components';

export function CurrentWeather() {
    const data = useSelector(selectValue);

    return (
        <>
            {data && data.currently && Object.keys(data).length > 0 ? (
                <Paper elevation={2} sx={{ height: '71vh', width: '20vw', borderRadius: '50px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <TextInComponents text={data.currently.name} fontSize='1rem' textVariant='h3' textAlign='center' fontWeight='bold' textStyle color />
                        <FavoriteActionButton cityName={data.currently.name} />
                    </Box>
                    <Box sx={{ width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: 2 }}>
                        <WeatherIcon weather={data.currently.weather} fontSize='8vw' widthAvatar='11vw' heightAvatar='22vh' />
                        <TextInComponents text={data.currently.main.temp} fontSize='1rem' textVariant='h3' textAlign='center' fontWeight='bold' textStyle color />
                        <TextInComponents text={data.currently.weather[0].description} fontSize='1.5rem' textVariant textAlign='center' fontWeight='bold' textStyle='italic' color="text.secondary" />
                    </Box>
                    <AdditionalInfo main={data.currently.main} wind={data.currently.wind} />
                </Paper>
            ) : (
                <CurrentWeatherLoading />
            )}
        </>
    )
}