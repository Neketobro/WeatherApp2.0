import { Box, Skeleton } from "@mui/material";

export function HourlyWeatherLoading() {
    return (
        <Box sx={{ width: '39vw', height: '30vh', borderRadius: '25px', display: 'flex', flexDirection: 'row', gap: 3, paddingInline: 10, paddingBlock: 2, overflowX: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none', }, }}>
            <Skeleton variant="rounded" width='39vw' height='18vh' />
        </Box>


    )
}