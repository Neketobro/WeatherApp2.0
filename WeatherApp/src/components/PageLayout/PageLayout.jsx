import { Box } from '@mui/material';

export function PageLayout({
    renderHeader,
    renderMain,
    children,
}) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                minHeight: '100vh',
            }}
        >
            <Box
                component="header"
                sx={{ flex: 1, borderRight: '1px solid', borderColor: 'divider' }}
            >
                {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
            </Box>
            <Box
                component="main"
                sx={{ flex: 6 }}
            >
                {renderMain ? renderMain() : children}
            </Box>
        </Box>
    );
}