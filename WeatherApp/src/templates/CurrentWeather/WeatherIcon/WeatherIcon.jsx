import { Avatar } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export function WeatherIcon() {
    return (
        <>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: '14vw', height: '14vw', bgcolor: 'rgb(151, 197, 201)' }}
            >
                <CloudQueueIcon sx={{ fontSize: "10vw" }} />
            </Avatar>
        </>
    )
}