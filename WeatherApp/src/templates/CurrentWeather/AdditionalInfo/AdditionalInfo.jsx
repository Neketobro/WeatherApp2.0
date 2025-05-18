import { Grid } from "@mui/material";
import { AdditionalTemplate } from './AdditionalTemplate';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';

export function AdditionalInfo({ main, wind }) {
    return (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={6} sx={{ height: '6vh' }}>
                <AdditionalTemplate icon={<ThermostatOutlinedIcon />} text={`${main.feels_like}°С`} title='Feels like' />
            </Grid>
            <Grid size={6} sx={{ height: '6vh' }}>
                <AdditionalTemplate icon={<WaterOutlinedIcon />} text={`${main.humidity}%`} title='Humidity' />
            </Grid>
            <Grid size={6} sx={{ height: '6vh' }}>
                <AdditionalTemplate icon={<AirOutlinedIcon />} text={`${wind.speed} m/s`} title='Wind speed' />
            </Grid>
            <Grid size={6} sx={{ height: '6vh' }}>
                <AdditionalTemplate icon={<AvTimerOutlinedIcon />} text={`${main.pressure} pask`} title='Pressure' />
            </Grid>
        </Grid>
    )
}