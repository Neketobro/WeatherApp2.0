import { Box } from '@mui/material'
import { PageLayout, NavPanel } from '@components'

export function MainPage() {
    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Box>
                    MainPage
                </Box>
            )}
        />
    )
}