const input = require('readline');

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (1, 10, 100, 1000, etc) : ', (num) => {
    num = parseInt(num);

    let placeValue;
    if (num === 1) {
        placeValue = "Unit";
    } 
    
    else if (num === 10) {
        placeValue = "Ten";
    } 
    
    else if (num === 100) {
        placeValue = "Hundred";
    } 
    
    else if (num === 1000) {
        placeValue = "Thousand";
    } 
    
    else {
        placeValue = "Invalid Input";
    }

    console.log("The place value is : " + placeValue);
    rl.close();
});
