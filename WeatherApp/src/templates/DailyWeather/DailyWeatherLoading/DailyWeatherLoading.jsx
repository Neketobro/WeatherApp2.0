import { Skeleton } from "@mui/material";

export function DailyWeatherLoading() {
    return (
        <>
            <Skeleton variant="rounded" width='48%' height='8vh' />
            <Skeleton variant="rounded" width='48%' height='8vh' />
            <Skeleton variant="rounded" width='48%' height='8vh' />
            <Skeleton variant="rounded" width='48%' height='8vh' />
            <Skeleton variant="rounded" width='48%' height='8vh' />
        </>
    )
}