import { Box } from '@mui/material'
import { PageLayout, NavPanel } from '@components'

export function HomePage() {
    return (
        <PageLayout
            renderHeader={() => <NavPanel />}
            renderMain={() => (
                <Box>
                    HomePage
                </Box>
            )}
        />
    )
}