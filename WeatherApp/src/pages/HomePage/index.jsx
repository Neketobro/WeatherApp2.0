import { useMediaQuery, Box } from '@mui/material';
import { PageLayout, Header } from '@components';
import { CurrentWeather } from '@templates'

export function HomePage() {
    const matches = useMediaQuery('(min-width:600px)');
    // console.log('media ->', matches);

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', }}>
                    <CurrentWeather />
                </Box>
            )}
        />
    )
}