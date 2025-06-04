import { useRef, useState, useEffect} from "react";
import { TextField, Stack, Autocomplete, Paper, Fab } from "@mui/material";
import { useDispatch } from 'react-redux';
import { cities } from '@utils';
import { weatherFetch } from "@store";
import SearchIcon from '@mui/icons-material/Search';


export function SearchInput() {
    const dispatch = useDispatch();
    const inputValue = useRef(null)
    const [disabled, setDisabled] = useState(true);

    function submitInput() {

        console.log('inputValue change -> ', inputValue.current.value);
    }

    function changeInput() {
        const valueInput = inputValue.current.value;
        
        if (valueInput.trim()) {
            return setDisabled(false);
        } else {
            return setDisabled(true);
        }
    }

    useEffect(() => {
        dispatch(weatherFetch('Hello'));
    }, [dispatch]);


    return (
        <Paper elevation={2} sx={{ height: '10vh', width: '39vw', borderRadius: '25px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Stack spacing={2} sx={{ width: '30vw' }}>
                <Autocomplete
                    id="city_name_input"
                    freeSolo
                    options={cities.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="City name" inputRef={inputValue} onBlur={changeInput} />}
                />
            </Stack>
            <Fab variant="contained" onClick={submitInput} sx={{ bgcolor: 'primary.main', }} disabled={disabled}>
                <SearchIcon />
            </Fab>
        </Paper>
    )
}