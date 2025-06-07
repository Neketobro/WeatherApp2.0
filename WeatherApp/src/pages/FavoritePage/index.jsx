import { Box } from '@mui/material'
import { PageLayout, Header } from '@components'
import { FavoriteLocation } from '@templates';

export function FavoritePage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    <FavoriteLocation />
                </Box>
            )}
        />
    )
}