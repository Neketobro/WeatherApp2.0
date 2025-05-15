import { Button } from "@mui/material";

export function CustomButton({ title, onClick, variant }) {
    return <Button variant={variant} onClick={onClick} sx={{ height: '5vh', color: "text.primary", fontWeight: 'bold', fontSize: '1rem', letterSpacing: '2px' }} fullWidth>{title}</Button>
}