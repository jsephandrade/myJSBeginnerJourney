// Exercise:
// Write a function that decides what to wear based on temperature.

function whatToWear(temperature) {
    if (temperature < 0) {
        return "Wear a heavy coat, hat, and gloves.";
    } else if (temperature < 10) {
        return "Wear a warm jacket and a scarf.";
    } else if (temperature < 20) {
        return "A light jacket or sweater should be fine.";
    } else if (temperature < 30) {
        return "A t-shirt and shorts are suitable.";
    } else {
        return "It's hot! Wear light clothing and stay hydrated.";
    }
}