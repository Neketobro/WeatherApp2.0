import { Paper } from "@mui/material";
import { selectValue } from "@store";
import { useSelector } from 'react-redux';
import { HourlyIcon } from './index';
import { TextInComponents } from '@ui';


export function HourlyWeather() {
    const data = useSelector(selectValue)

    console.log('data -> ', data.hourly);

    if (data.hourly) {
        const arr = data.hourly.list.slice(0, 5);
        arr.map((el, key) => {
            console.log('key -> ', key, el);
        })
    }

    return (
        <>
            {data && data.hourly && Object.keys(data).length > 0 ? (
                <Paper elevation={2} sx={{ width: '39vw', borderRadius: '25px', display: 'flex', flexDirection: 'row', gap: 3, padding: 5, overflowX: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none', }, }}>
                    {data.hourly.list.slice(0, 20).map(({ dt_txt, main, weather }, key) => (
                        <Paper elevation={1} key={key} sx={{ width: '5vw', display: 'flex', borderRadius: '20px', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 1, padding: 1 }}>
                            <TextInComponents text={dt_txt.slice(5, 10)} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                            <TextInComponents text={dt_txt.slice(11, 16)} fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color />
                            <HourlyIcon weather={weather} />
                            <TextInComponents text={main.temp} fontSize='1rem' textVariant textAlign='center' fontWeight textStyle color />
                        </Paper>
                    ))}
                </Paper>
            ) : (
                <Paper>
                    Loading...
                </Paper>
            )}
        </>
    )
}

// data && data.currently && Object.keys(data).length > 0

// dt_txt
// main (humidity, pressure, temp, feels_like)
// weather (description, icon, main)
// wind (speed)