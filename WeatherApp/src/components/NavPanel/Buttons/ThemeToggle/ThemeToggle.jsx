import { DARK_THEME, LIGHT_THEME } from '@services';
import { selectTheme, setTheme } from '@store';
import { CustomButton } from "@ui";
import { useDispatch, useSelector } from 'react-redux';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


export function ThemeToggle() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    function toggleThemeHandler() {
        const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        dispatch(setTheme(newTheme));
    }
    const iconTheme = theme === DARK_THEME ? (<LightModeOutlinedIcon />) : (<DarkModeOutlinedIcon />);

    return <CustomButton variant='text' title={iconTheme} onClick={toggleThemeHandler} fullWidth />;
}