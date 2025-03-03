let n = 50; // Example value (user is thinking of a number between 1 to 100)
let low = 1;
let high = 100;
let magicNumberFound = false;

while (!magicNumberFound) {
    let mid = Math.floor((low + high) / 2);
    console.log(`Is your number less than or equal to ${mid}? (yes/no)`);
    // Simulate user response for demo purposes
    let userResponse = (n <= mid) ? "yes" : "no"; // Replace with actual user input

    if (userResponse === "yes") {
        high = mid;
    } else {
        low = mid + 1;
    }

    if (low === high) {
        magicNumberFound = true;
        console.log(`Your magic number is ${low}`);
    }
}
