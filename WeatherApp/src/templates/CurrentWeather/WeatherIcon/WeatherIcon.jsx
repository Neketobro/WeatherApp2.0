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
    Clouds: <CloudQueueIcon sx={{ fontSize: "8vw" }} />,
    Clear: <WbSunnyOutlinedIcon sx={{ fontSize: "8vw" }} />,
    Snow: <AcUnitOutlinedIcon sx={{ fontSize: "8vw" }} />,
    Rain: <WaterDropOutlinedIcon sx={{ fontSize: "8vw" }} />,
    Thunderstorm: <ThunderstormOutlinedIcon sx={{ fontSize: "8vw" }} />,
    Drizzle: <FlashOnOutlinedIcon sx={{ fontSize: "8vw" }} />,
}

export function WeatherIcon({ weatherStatus }) {
    const { colorForIcon } = colorIconWeather(weatherStatus);

    const IconComponent = weatherIcon[weatherStatus] || <HelpOutlineOutlinedIcon sx={{ fontSize: "10vw" }} />;

    return (
        <Avatar
            alt="?"
            sx={{ width: '11vw', height: '11vw', bgcolor: colorForIcon }}
        >
            {IconComponent}
        </Avatar>
    )
}