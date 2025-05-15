import { Button } from "@mui/material";

export function CustomButton({ title, onClick, variant, fullWidth }) {
    return <Button variant={variant} onClick={onClick} fullWidth={fullWidth} sx={{ height: '5vh', color: "text.primary", fontWeight: 'bold', fontSize: '1rem', letterSpacing: '2px' }}>{title}</Button>
}