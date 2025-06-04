import { useMediaQuery, Box } from '@mui/material';
import { PageLayout, Header, SearchInput } from '@components';
import { CurrentWeather, HourlyWeather } from '@templates'

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
                    <Box sx={{ background: 'blue', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                        <SearchInput />
                        <HourlyWeather />
                    </Box>
                </Box>
            )}
        />
    )
}