function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); // Should return true
console.log(isPalindrome(123)); // Should return false
