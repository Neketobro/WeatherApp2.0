import { Collapse, Box, Fab } from "@mui/material";
import { useSelector } from "react-redux";
import { selectcCollapsingState } from '@store';
import { Clock } from '@components';

export function CollapseWrapper() {
    const isOpen = useSelector(selectcCollapsingState);

    return (
        <Collapse
            in={isOpen}
            orientation="horizontal"
            timeout="auto"
            sx={{ overflow: 'hidden', borderRadius: 10, }}
        >
            <Box sx={{ padding: 2, display: 'flex', gap: 1 }}>
                <Fab size="small" color="primary">B1</Fab>
                <Fab size="small" color="primary">B2</Fab>
                <Fab size="small" color="primary">B3</Fab>
                <Fab size="small" color="primary">B4</Fab>
                <Clock />
            </Box>
        </Collapse>
    );
}
