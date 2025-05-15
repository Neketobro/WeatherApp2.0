import { CustomButton } from "@ui";
import { NavLink } from 'react-router-dom';

export function NavigationButton() {
    return (
        <>
            <NavLink to='/'>
                <CustomButton variant='text' title='Home' />
            </NavLink>
            <NavLink to='/favorite'>
                <CustomButton variant='text' title='Favorite' />
            </NavLink>
        </>
    )
}