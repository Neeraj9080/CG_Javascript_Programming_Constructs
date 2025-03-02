let singleDigit = Math.floor(Math.random() * 10);
let numberInWords;

switch (singleDigit) {
    
    case 0:
        numberInWords = "Zero";
        break;

    case 1:
        numberInWords = "One";
        break;

    case 2:
        numberInWords = "Two";
        break;

    case 3:
        numberInWords = "Three";
        break;

    case 4:
        numberInWords = "Four";
        break;

    case 5:
        numberInWords = "Five";
        break;

    case 6:
        numberInWords = "Six";
        break;

    case 7:
        numberInWords = "Seven";
        break;

    case 8:
        numberInWords = "Eight";
        break;

    case 9:
        numberInWords = "Nine";
        break;

    default:
        numberInWords = "Invalid Input";
}

console.log(singleDigit + " in words is : " + numberInWords);
