import { Typography } from "@mui/material";

export function TextInComponents({ text = text || 'Text...', fontSize = fontSize || '10px', textVariant = textVariant || 'p', textAlign = textAlign || 'start', fontWeight = fontWeight || 'none', textStyle = textStyle || 'normal', }) {
    return (
        <Typography variant={textVariant} fontWeight={fontWeight} textAlign={textAlign} fontSize={fontSize} fontStyle={textStyle}>
            {typeof text === 'number' ? `${Math.round(text)}°С` : text}
        </Typography>
    )
}