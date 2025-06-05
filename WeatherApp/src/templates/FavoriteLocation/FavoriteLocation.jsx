import { Box } from "@mui/material";
import { TextInComponents } from "@components";
import { useSelector } from "react-redux";
import { selectFavorite } from "@store";

export function FavoriteLocation() {

    const favorite = useSelector(selectFavorite);

    console.log(favorite);


    return (
        <Box sx={{ width: '50%', height: '31vh' }}>
            <TextInComponents text='Favorite location' fontSize='.5rem' textVariant='h6' textAlign='center' fontWeight='bold' textStyle='italic' color='text.secondary' />
            {favorite && Object.keys(favorite).length > 0 ? (
                favorite.map((el, key) => (
                    <Box key={key}>
                        {el}
                    </Box>
                ))
            ) : (
                'city not found...'
            )}
        </Box>
    )
}