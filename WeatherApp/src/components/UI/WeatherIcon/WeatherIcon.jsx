import { Avatar } from "@mui/material";
import { colorIconWeather } from '@utils';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export function WeatherIcon({ weather, fontSize, widthAvatar, heightAvatar }) {
    const weatherStatus = weather[0].main;
    const { colorForIcon } = colorIconWeather(weatherStatus);

    const weatherIcon = {
        Clouds: <CloudQueueIcon sx={{ fontSize }} />,
        Clear: <WbSunnyOutlinedIcon sx={{ fontSize }} />,
        Snow: <AcUnitOutlinedIcon sx={{ fontSize }} />,
        Rain: <WaterDropOutlinedIcon sx={{ fontSize }} />,
        Thunderstorm: <ThunderstormOutlinedIcon sx={{ fontSize }} />,
        Drizzle: <FlashOnOutlinedIcon sx={{ fontSize }} />,
    }
    const IconComponent = weatherIcon[weatherStatus] || <HelpOutlineOutlinedIcon sx={{ fontSize }} />;

    return (
        <Avatar
            alt="?"
            sx={{ width: widthAvatar, height: heightAvatar, bgcolor: colorForIcon }}
        >
            {IconComponent}
        </Avatar>
    )
}