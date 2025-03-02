const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (1, 10, 100, 1000, etc) : ', (num) => {
    num = parseInt(num);

    let placeValue;
    switch (num) 
    {
        case 1:
            placeValue = "Unit";
            break;

        case 10:
            placeValue = "Ten";
            break;

        case 100:
            placeValue = "Hundred";
            break;

        case 1000:
            placeValue = "Thousand";
            break;

        default:
            placeValue = "Invalid Input";
    }

    console.log("The place value is : " + placeValue);
    rl.close();
});
