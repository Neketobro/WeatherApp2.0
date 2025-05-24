import { DARK_THEME, LIGHT_THEME } from '@services';
import { selectTheme, setTheme } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import { Fab } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export function ThemeButton() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    function toggleThemeHandler() {
        const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        dispatch(setTheme(newTheme));
    }

    return (
        <>
            {theme === DARK_THEME ? (
                <Fab onClick={toggleThemeHandler} sx={{ bgcolor: 'primary.main', }}>
                    <LightModeOutlinedIcon />
                </Fab>
            ) : (
                <Fab onClick={toggleThemeHandler} sx={{ bgcolor: 'primary.main', }}>
                    <DarkModeOutlinedIcon />
                </Fab>
            )}
        </>
    )
}


// export function ThemeToggle() {
//     const theme = useSelector(selectTheme);
//     const dispatch = useDispatch();

//

//     return <CustomButton variant='text' title={iconTheme} onClick={toggleThemeHandler} fullWidth />;
// }