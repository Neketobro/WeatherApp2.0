import { Collapse, Box, Fab } from "@mui/material";
import { useSelector } from "react-redux";
import { selectcCollapsingState } from '@store';
import { CurrentLocationButton, DownloadAppButton, NavigationButton } from "./index.js";

export function CollapseWrapper() {
    const isOpen = useSelector(selectcCollapsingState);

    return (
        <Collapse
            in={isOpen}
            orientation="horizontal"
            timeout="auto"
            sx={{ overflow: 'hidden', borderRadius: 10, }}
        >
            <Box sx={{ padding: 2, display: 'flex', gap: 2 }}>
                <NavigationButton />
                <CurrentLocationButton />
                <DownloadAppButton />
            </Box>
        </Collapse>
    );
}
