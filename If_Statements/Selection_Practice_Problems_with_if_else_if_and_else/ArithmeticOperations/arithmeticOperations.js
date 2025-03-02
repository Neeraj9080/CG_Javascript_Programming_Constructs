const input = require('readline');

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number (a) : ', (a) => {
    rl.question('Enter the second number (b) : ', (b) => {
        rl.question('Enter the third number (c) : ', (c) => {
            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);

            let result1 = a + b * c;
            let result2 = a % b + c;
            let result3 = c + a / b;
            let result4 = a * b + c;

            let maxValue = result1;
            if (result2 > maxValue) 
                maxValue = result2;

            if (result3 > maxValue) 
                maxValue = result3;

            if (result4 > maxValue) 
                maxValue = result4;

            let minValue = result1;

            if (result2 < minValue) 
                minValue = result2;

            if (result3 < minValue) 
                minValue = result3;

            if (result4 < minValue) 
                minValue = result4;

            console.log("Results : ");
            console.log("a + b * c = ", result1);
            console.log("a % b + c = ", result2);
            console.log("c + a / b = ", result3);
            console.log("a * b + c = ", result4);
            console.log("Maximum Value : ", maxValue);
            console.log("Minimum Value : ", minValue);

            rl.close();
        });
    });
});
