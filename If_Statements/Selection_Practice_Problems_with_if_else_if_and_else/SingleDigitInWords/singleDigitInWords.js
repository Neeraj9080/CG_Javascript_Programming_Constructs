let singleDigit = Math.floor(Math.random() * 10);
let numberInWords;

if (singleDigit === 0)    {
    numberInWords = "Zero";
} 

else if (singleDigit === 1) {
    numberInWords = "One";
} 

else if (singleDigit === 2) {
    numberInWords = "Two";
} 

else if (singleDigit === 3) {
    numberInWords = "Three";
} 

else if (singleDigit === 4) {
    numberInWords = "Four";
} 

else if (singleDigit === 5) {
    numberInWords = "Five";
} 

else if (singleDigit === 6) {
    numberInWords = "Six";
} 

else if (singleDigit === 7) {
    numberInWords = "Seven";
} 

else if (singleDigit === 8) {
    numberInWords = "Eight";
} 

else if (singleDigit === 9) {
    numberInWords = "Nine";
} 

else {
    numberInWords = "Invalid Input";
}

console.log(singleDigit + " in words is: " + numberInWords);
