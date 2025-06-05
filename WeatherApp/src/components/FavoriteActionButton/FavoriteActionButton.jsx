import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { setFavorite, selectFavorite } from '@store';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';

export function FavoriteActionButton({ cityName }) {
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavorite);

    const isFavorite = favorite.includes(cityName);

    function setFavoriteCityName() {
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = favorite.filter(city => city !== cityName);
        } else {
            updatedFavorites = [...favorite, cityName];
        }

        dispatch(setFavorite(updatedFavorites));
    }

    return (
        <IconButton sx={{ color: "text.primary" }} onClick={setFavoriteCityName}>
            {isFavorite ? (
                <StarPurple500OutlinedIcon sx={{ fontSize: '4vh' }} />
            ) : (
                <StarBorderPurple500OutlinedIcon sx={{ fontSize: '4vh' }} />
            )}
        </IconButton>
    );
}
