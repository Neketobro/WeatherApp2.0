import { Container, Typography } from "@mui/material";
import { Buttons } from "@components";

export function NavPanel() {
    return (
        <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 10}}>
            <Typography variant="h4" textAlign='center' sx={{ fontWeight: 'bold' }}>Weather forecast</Typography>
            <Buttons />
        </Container>
    )
}