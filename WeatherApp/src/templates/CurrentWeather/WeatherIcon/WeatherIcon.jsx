import { Avatar } from "@mui/material";
import { colorIconWeather } from '@utils';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const weatherIcon = {
    Clouds: <CloudQueueIcon sx={{ fontSize: "10vw" }} />,
    Clear: <WbSunnyOutlinedIcon sx={{ fontSize: "10vw" }} />,
    Snow: <AcUnitOutlinedIcon sx={{ fontSize: "10vw" }} />,
    Rain: <WaterDropOutlinedIcon sx={{ fontSize: "10vw" }} />,
    Thunderstorm: <ThunderstormOutlinedIcon sx={{ fontSize: "10vw" }} />,
    Drizzle: <FlashOnOutlinedIcon sx={{ fontSize: "10vw" }} />,
}

export function WeatherIcon({ weatherStatus }) {
    const { colorForIcon } = colorIconWeather(weatherStatus);

    const IconComponent = weatherIcon[weatherStatus] || <HelpOutlineOutlinedIcon sx={{ fontSize: "10vw" }} />;

    return (
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: '14vw', height: '14vw', bgcolor: colorForIcon }}
        >
            {IconComponent}
        </Avatar>
    )
}