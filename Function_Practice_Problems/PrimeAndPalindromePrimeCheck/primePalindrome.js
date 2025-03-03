function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    let str = num.toString();
    return parseInt(str.split('').reverse().join(''), 10);
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`${num} is a prime and its palindrome ${palindrome} is also a prime.`);
        } else {
            console.log(`${num} is a prime but its palindrome ${palindrome} is not a prime.`);
        }
    } else {
        console.log(`${num} is not a prime.`);
    }
}

checkPrimeAndPalindrome(13); // Should print: 13 is a prime but its palindrome 31 is also a prime.
checkPrimeAndPalindrome(101); // Should print: 101 is a prime and its palindrome 101 is also a prime.
