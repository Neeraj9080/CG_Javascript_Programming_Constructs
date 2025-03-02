let lengthInMeters = 30;
let widthInMeters = 20;
let areaInMeters = lengthInMeters * widthInMeters;
let numberOfPlots = 25;
let totalAreaInMeters = areaInMeters * numberOfPlots;
let squareMetersToAcreConversionFactor = 0.000247105;

let totalAreaInAcres = totalAreaInMeters * squareMetersToAcreConversionFactor;
console.log("Area of 25 plots in acres:", totalAreaInAcres);
