import { Box, Container } from '@mui/material';

export function PageLayout({
    renderHeader,
    renderMain,
    children,
}) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                minHeight: '100vh',
            }}
        >
            <Container
                component="header"
                sx={{ flex: 1 }}
            >
                {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
            </Container>
            <Container
                component="main"
                sx={{ background: 'lightgrey', flex: 6 }}
            >
                {renderMain ? renderMain() : children}
            </Container>
        </Box>
    );
}