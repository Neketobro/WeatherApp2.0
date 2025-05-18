export function colorIconWeather(status) {
    let colorForIcon = '';

    switch (status) {
        case 'Clouds':
            colorForIcon = 'rgb(143, 143, 143)';
            break;
        case 'Clear':
            colorForIcon = 'rgb(255, 196, 0)';
            break;
        case 'Snow':
            colorForIcon = 'rgb(138, 244, 252)';
            break;
        case 'Rain':
            colorForIcon = 'rgb(0, 162, 255)';
            break;
        case 'Thunderstorm':
            colorForIcon = 'rgb(38, 102, 99)';
            break;
        case 'Drizzle':
            colorForIcon = 'rgb(198, 201, 64)';
            break;

        default:
            break;
    }

    return { colorForIcon };
}