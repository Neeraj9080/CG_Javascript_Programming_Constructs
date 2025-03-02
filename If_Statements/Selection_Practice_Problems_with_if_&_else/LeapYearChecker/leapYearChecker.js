const input = require('readline');

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the year : ', (year) => {
    year = parseInt(year);

    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeapYear ? " Leap Year " : " Not a Leap Year ");

    rl.close();
});
