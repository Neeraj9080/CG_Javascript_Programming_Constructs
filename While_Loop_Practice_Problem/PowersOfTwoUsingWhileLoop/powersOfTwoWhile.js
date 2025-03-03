let n = 10; 
let i = 0;
while (Math.pow(2, i) <= Math.pow(2, n) && Math.pow(2, i) <= 256) {
    console.log(Math.pow(2, i));
    i++;
}
