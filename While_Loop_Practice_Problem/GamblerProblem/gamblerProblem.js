let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.floor(Math.random() * 2); // 0 for loss, 1 for win
    if (betResult === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Number of bets made: ${bets}`);
console.log(`Number of wins: ${wins}`);
console.log(`Final amount of money: ${money}`);
