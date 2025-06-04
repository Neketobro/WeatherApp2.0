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
        Clouds: <CloudQueueIcon sx={{ fontSize: "2vw" }} />,
        Clear: <WbSunnyOutlinedIcon sx={{ fontSize: "2vw" }} />,
        Snow: <AcUnitOutlinedIcon sx={{ fontSize: "2vw" }} />,
        Rain: <WaterDropOutlinedIcon sx={{ fontSize: "2vw" }} />,
        Thunderstorm: <ThunderstormOutlinedIcon sx={{ fontSize: "2vw" }} />,
        Drizzle: <FlashOnOutlinedIcon sx={{ fontSize: "2vw" }} />,
    }

export function HourlyIcon({ weather }) {
    const weatherStatus = weather[0].main;
    const { colorForIcon } = colorIconWeather(weatherStatus);

    const IconComponent = weatherIcon[weatherStatus] || <HelpOutlineOutlinedIcon sx={{ fontSize: "2vw" }} />;

    return (
        <Avatar
            alt="?"
            sx={{ width: '3vw', height: '3vw', bgcolor: colorForIcon }}
        >
            {IconComponent}
        </Avatar>
    )
}