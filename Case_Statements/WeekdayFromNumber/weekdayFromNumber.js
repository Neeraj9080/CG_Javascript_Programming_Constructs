const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (0 for Sunday, 1 for Monday, ... , 6 for Saturday) : ', (num) => {
    num = parseInt(num);

    let weekday;
    switch (num) {
        
        case 0:
            weekday = "Sunday";
            break;

        case 1:
            weekday = "Monday";
            break;

        case 2:
            weekday = "Tuesday";
            break;

        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;

        case 5:
            weekday = "Friday";
            break;

        case 6:
            weekday = "Saturday";
            break;

        default:
            weekday = "Invalid Input";
    }

    console.log("The weekday is : " + weekday);
    rl.close();
});
