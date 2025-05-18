import { useMediaQuery, Paper , Container } from '@mui/material';
import { PageLayout, NavPanel } from '@components';
import { CurrentWeather } from '@templates'

export function HomePage() {
    const matches = useMediaQuery('(min-width:600px)');
    // console.log('media ->', matches);

    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Paper elevation={2} sx={{ height: '70vh', width: '30vw', borderRadius: '50px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <CurrentWeather />
                    </Paper >
                </Container>
            )}
        />
    )
}