import { Box, Skeleton, Grid, Paper } from "@mui/material";

export function CurrentWeatherLoading() {
    return (
        <Paper elevation={2} sx={{ height: '70vh', width: '20vw', borderRadius: '50px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Skeleton variant="rounded" width='10vw' height={40} />
            </Box>
            <Box sx={{ width: '100%', height: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, paddingBlock: '2vh' }}>
                <Skeleton variant="circular" width='14vw' height='14vw' />
                <Box sx={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Skeleton variant="rounded" width='10vw' height={40} />
                </Box>
                <Skeleton variant="rounded" width='10vw' height={40} />
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                    <Skeleton variant="rounded" width='8vw' height={60} />
                </Grid>
                <Grid size={6}>
                    <Skeleton variant="rounded" width='8vw' height={60} />
                </Grid>
                <Grid size={6}>
                    <Skeleton variant="rounded" width='8vw' height={60} />
                </Grid>
                <Grid size={6}>
                    <Skeleton variant="rounded" width='8vw' height={60} />
                </Grid>
            </Grid>
        </Paper>
    )
}