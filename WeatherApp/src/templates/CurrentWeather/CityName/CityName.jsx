import { Typography, Box, Skeleton } from "@mui/material";

export function CityName({ cityName }) {
    return (
        <>
            {cityName ? (
                <Typography variant="h3" fontWeight="bold" textAlign='center' fontSize='1rem'>
                    {cityName}
                </Typography>
            ) : (
                <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Skeleton variant="rounded" width={200} height={40} />
                </Box>
            )}
        </>
    )
}