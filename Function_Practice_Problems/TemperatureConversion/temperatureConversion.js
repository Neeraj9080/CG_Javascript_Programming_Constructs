function convertTemperature(value, scale) {
    switch(scale) {
        case 'C':
            if (value >= 0 && value <= 100) {
                return (value * 9 / 5) + 32;
            } else {
                return "Input out of range (0 °C to 100 °C)";
            }
        case 'F':
            if (value >= 32 && value <= 212) {
                return (value - 32) * 5 / 9;
            } else {
                return "Input out of range (32 °F to 212 °F)";
            }
        default:
            return "Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

console.log(convertTemperature(100, 'C')); // Should print 212
console.log(convertTemperature(212, 'F')); // Should print 100
