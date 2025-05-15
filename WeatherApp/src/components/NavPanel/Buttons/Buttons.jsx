import { Box } from "@mui/material";
import { CurentlyLocation, DownloadApp, NavigationButton, ThemeToggle } from "@components";

export function Buttons() {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <NavigationButton />
                <CurentlyLocation />
                <DownloadApp />
            </Box>
            <ThemeToggle />
        </Box>
    )
}