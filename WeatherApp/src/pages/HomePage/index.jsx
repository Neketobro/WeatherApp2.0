import { useMediaQuery, Paper , Container } from '@mui/material';
import { PageLayout, NavPanel } from '@components';
import { CurrentWeather } from '@templates'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const data = {
    cityName: 'Dnipro',
    temperature: '20C',
    weatherIcon: <WbSunnyIcon />,
    windSpeed: '20km/h',
    humidity: '22%'
}

export function HomePage() {
    const matches = useMediaQuery('(min-width:600px)');
    // console.log('media ->', matches);

    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Container sx={{ background: 'green', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Paper  sx={{ background: 'yellow', height: '70vh', width: '30vw' }}>
                        <CurrentWeather data={data} />
                    </Paper >
                </Container>
            )}
        />
    )
}