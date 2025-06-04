import { useMediaQuery, Box, Paper } from '@mui/material';
import { PageLayout, Header, SearchInput } from '@components';
import { CurrentWeather, HourlyWeather, FavoriteLocation, DailyWeather } from '@templates'

export function HomePage() {
    const matches = useMediaQuery('(min-width:600px)');
    // console.log('media ->', matches);

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ display: 'flex', gap: 10 }}>
                    <Box sx={{ background: 'red', height: '100%', display: 'flex', alignItems: 'center', }}>
                        <CurrentWeather />
                    </Box>
                    <Box sx={{ background: 'blue', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 5 }}>
                        <SearchInput />
                        <HourlyWeather />
                        <Paper elevation={2} sx={{ position: 'relative', width: '39vw', height: '30vh', borderRadius: '25px', display: 'flex', flexDirection: 'row', padding: 2, }}>
                            <FavoriteLocation />
                            <DailyWeather />
                        </Paper>
                    </Box>
                </Box>
            )}
        />
    )
}