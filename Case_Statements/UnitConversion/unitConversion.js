const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value to be converted : ', (value) => {
    rl.question('Enter the conversion type (1: Feet to Inch, 2: Feet to Meter, 3: Inch to Feet, 4: Meter to Feet): ', (type) => {
        value = parseFloat(value);
        type = parseInt(type);
        let convertedValue;

        switch (type) {
            case 1:
                convertedValue = value * 12;
                console.log(value + " feet = " + convertedValue + " inches");
                break;
            case 2:
                convertedValue = value * 0.3048;
                console.log(value + " feet = " + convertedValue + " meters");
                break;
            case 3:
                convertedValue = value / 12;
                console.log(value + " inches = " + convertedValue + " feet");
                break;
            case 4:
                convertedValue = value / 0.3048;
                console.log(value + " meters = " + convertedValue + " feet");
                break;
            default:
                console.log("Invalid conversion type");
        }
        
        rl.close();
    });
});
