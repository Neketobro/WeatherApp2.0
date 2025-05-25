import { Fab } from '@mui/material';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';

export function CurrentLocationButton() {
    return (
        <>
            <Fab size="small" color="primary">
                <ShareLocationOutlinedIcon />
            </Fab>
        </>
    )
}