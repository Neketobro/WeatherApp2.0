import { Box } from '@mui/material'
import { PageLayout, Header } from '@components'

export function FavoritePage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    FavoritePage
                </Box>
            )}
        />
    )
}