import { Fab } from '@mui/material';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';

export function DownloadAppButton() {
    return (
        <>
            <Fab size="small" color="primary">
                <DownloadingOutlinedIcon />
            </Fab>
        </>
    )
}