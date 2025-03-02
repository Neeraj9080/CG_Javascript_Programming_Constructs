const input = require('readline');

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the day : ', (day) => {
    rl.question('Enter the month : ', (month) => {
        day = parseInt(day);
        month = parseInt(month);

        let isInSpring = (month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20);
        console.log(isInSpring);
        
        rl.close();
    });
});
