import { Box, Fab } from "@mui/material";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useDispatch } from "react-redux";
import { setCollapsingState } from '@store';
import { CollapseWrapper } from "./CollapseWrapper";

export function CollapseButton() {
    const dispatch = useDispatch();    

    return (
        <Box sx={{ display: 'flex', gap: 5 }}>
            <Fab  onClick={() => dispatch(setCollapsingState())} sx={{ bgcolor: 'primary.main', }}>
                <MenuOpenOutlinedIcon />
            </Fab>
            <CollapseWrapper />
        </Box>
    )
}