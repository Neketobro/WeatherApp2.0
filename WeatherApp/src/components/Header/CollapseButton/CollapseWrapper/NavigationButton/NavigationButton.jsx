import { Fab } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

export function NavigationButton() {
    return (
        <>
            <NavLink to='/'>
                <Fab size="small" color="primary">
                    <HomeOutlinedIcon />
                </Fab>
            </NavLink>
            <NavLink to='/favorite'>
                <Fab size="small" color="primary">
                    <GradeOutlinedIcon />
                </Fab>
            </NavLink>
        </>
    )
}