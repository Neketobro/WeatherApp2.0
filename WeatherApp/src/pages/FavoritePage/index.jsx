import { Box } from '@mui/material'
import { PageLayout, NavPanel } from '@components'

export function FavoritePage() {
    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Box>
                    FavoritePage
                </Box>
            )}
        />
    )
}