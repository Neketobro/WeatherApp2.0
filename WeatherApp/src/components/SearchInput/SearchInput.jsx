import { TextField, Stack, Autocomplete, Paper } from "@mui/material";
import { cities } from '@utils';

export function SearchInput() {
    return (
        <Paper elevation={2} sx={{ height: '10vh', width: '39vw', borderRadius: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Stack spacing={2} sx={{ background: 'yellow', width: '30vw',}}>
                <Autocomplete
                    id="city_name_input"
                    freeSolo
                    options={cities.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="City name" sx={{ height: '5vh', borderRadius: '18px',  }} />}
                />
            </Stack>
        </Paper>
    )
}