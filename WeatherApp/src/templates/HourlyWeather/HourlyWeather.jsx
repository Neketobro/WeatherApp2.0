import { useRef } from "react";
import { useSelector } from 'react-redux';
import { Paper, IconButton, Box } from "@mui/material";
import { selectValue } from "@store";
import { TextInComponents } from '@ui';
import { WeatherIcon } from '@components';
import { HourlyWeatherLoading } from './index';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export function HourlyWeather() {
    const data = useSelector(selectValue);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Paper elevation={2} sx={{ position: 'relative', width: '39vw', height: '25vh', borderRadius: '25px', display: 'flex', flexDirection: 'column', paddingBlock: 2, }}>
            <TextInComponents text='Forecast every 3 hours' fontSize='1rem' textVariant='h5' textAlign='center' fontWeight='bold' textStyle='italic' color='text.secondary' />
            {data && data.hourly && Object.keys(data).length > 0 ? (
                <>
                    <IconButton onClick={() => scroll('left')} sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', borderRadius: '50%', boxShadow: 2, }}>
                        <KeyboardDoubleArrowLeftIcon fontSize="small" />
                    </IconButton>
                    <Box ref={scrollRef} sx={{ width: '39vw', height: '20vh', borderRadius: '25px', display: 'flex', flexDirection: 'row', gap: 3, paddingInline: 10, paddingBlock: 2, overflowX: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none', }, }}>
                        {data.hourly.list.map(({ dt_txt, main, weather }, key) => (
                            <Paper elevation={1} key={key} sx={{ width: '10vw', display: 'flex', borderRadius: '20px', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 1, padding: 3 }}>
                                <TextInComponents text={`${dt_txt.slice(8, 10)}.${dt_txt.slice(5, 7)}`} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                                <TextInComponents text={dt_txt.slice(11, 16)} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                                <WeatherIcon weather={weather} fontSize='2vw' widthAvatar='3vw' heightAvatar='6vh' />
                                <TextInComponents text={main.temp} fontSize='1rem' textVariant textAlign='center' fontWeight textStyle color />
                            </Paper>
                        ))}
                    </Box>
                    <IconButton onClick={() => scroll('right')} sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', borderRadius: '50%', boxShadow: 2, }}>
                        <KeyboardDoubleArrowRightIcon fontSize="small" />
                    </IconButton>
                </>
            ) : (
                <HourlyWeatherLoading />
            )}
        </Paper>
    )
}