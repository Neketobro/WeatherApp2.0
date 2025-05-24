import { Box, Fab } from "@mui/material";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useDispatch, useSelector } from "react-redux";
import { selectcCollapsingState, setCollapsingState } from '@store';
import { CollapseWrapper } from "./CollapseWrapper";

export function CollapseButton() {
    const isOpen = useSelector(selectcCollapsingState);
    const dispatch = useDispatch();

    console.log('isOpen -> ', isOpen);
    

    return (
        <Box sx={{ display: 'flex', gap: 5 }}>
            <Fab  onClick={() => dispatch(setCollapsingState())} sx={{ bgcolor: 'primary.main', }}>
                <MenuOpenOutlinedIcon />
            </Fab>
            <CollapseWrapper />
        </Box>
    )
}