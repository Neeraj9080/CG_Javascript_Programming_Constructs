const input = require('readline');

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (0 for Sunday, 1 for Monday, ... , 6 for Saturday) : ', (num) => {
    num = parseInt(num);

    let weekday;
    if (num === 0) {
        weekday = "Sunday";
    } 
    
    else if (num === 1) {
        weekday = "Monday";
    } 
    
    else if (num === 2) {
        weekday = "Tuesday";
    } 
    
    else if (num === 3) {
        weekday = "Wednesday";
    } else if (num === 4) {
        weekday = "Thursday";
    } 
    
    else if (num === 5) {
        weekday = "Friday";
    } 
    
    else if (num === 6) {
        weekday = "Saturday";
    } 
    
    else {
        weekday = "Invalid Input";
    }

    console.log("The weekday is : " + weekday);
    rl.close();
});
