import { Box, Button } from "@mui/material";
import { TextInComponents } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite, weatherFetch } from "@store";
import { useState } from "react";
import { useNavigate } from "react-router";

export function FavoriteLocation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavorite);
    const [disabled, setDisabled] = useState(false);

    return (
        <Box sx={{ width: '50%', height: '31vh' }}>
            <TextInComponents text='Favorite location' fontSize='.5rem' textVariant='h6' textAlign='center' fontWeight='bold' textStyle='italic' color='text.secondary' />
            <Box sx={{ display: 'flex', height: '25vh', alignItems: 'center', flexWrap: 'wrap', gap: 4, justifyContent: 'center', overflow: 'auto' }}>
                {favorite && Object.keys(favorite).length > 0 ? (
                    favorite.map((el, key) => (
                        <Button variant='contained' key={key} onClick={() => {
                            dispatch(weatherFetch(el))
                            setDisabled(true);
                            setTimeout(() => {
                                setDisabled(false)
                            }, 2000);
                            navigate('/')
                        }} disabled={disabled} loading={disabled}>
                            {el}
                        </Button>
                    ))
                ) : (
                    <TextInComponents text='City not found...' fontSize='1rem' textVariant='p' textAlign='center' fontWeight textStyle color='text.secondary' />
                )}
            </Box>
        </Box>
    )
}