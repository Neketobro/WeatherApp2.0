import { Box, Paper } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectValue } from '@store';
import { TextInComponents } from '@components';
import { WeatherIcon } from '@ui';
import { DailyWeatherLoading } from './index';
import { getEvery8thItem } from "@utils";

export function DailyWeather() {
    const data = useSelector(selectValue);

    return (
        <Box sx={{ width: '50%', height: '31vh',}}>
            <TextInComponents text='Forecast daily' fontSize='.5rem' textVariant='h6' textAlign='center' fontWeight='bold' textStyle='italic' color='text.secondary' />
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                {data && data.hourly && Object.keys(data).length > 0 ? (
                    getEvery8thItem(data.hourly.list).map(({ dt_txt, main, weather }, key) => (
                        <Paper elevation={2} key={key} sx={{ width: '48%', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '15px', gap: 5, paddingInline: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextInComponents text={`${dt_txt.slice(8, 10)}.${dt_txt.slice(5, 7)}`} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                                <TextInComponents text={dt_txt.slice(11, 16)} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                            </Box>
                                <WeatherIcon weather={weather} fontSize='1.2vw' widthAvatar='2.2vw' heightAvatar='4.4vh' />
                                <TextInComponents text={main.temp} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                        </Paper>
                    ))
                ) : (
                    <DailyWeatherLoading />
                )}
            </Box>
        </Box>
    )
}