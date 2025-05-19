import { useMediaQuery, Container, Box } from '@mui/material';
import { PageLayout, NavPanel } from '@components';
import { CurrentWeather } from '@templates'

export function HomePage() {
    const matches = useMediaQuery('(min-width:600px)');
    // console.log('media ->', matches);

    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', paddingInline: '5vw' }}>
                    <CurrentWeather />
                </Box>
            )}
        />
    )
}