const minNumber = 1;
const maxNumber = 100;
const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guessedNumbers;
let running = true;

while (running) {
    const userInput = prompt(`Guess a number between ${minNumber} and ${maxNumber}:`);
    const guessedNumber = Number(userInput);
    attempts += 1;

    if (isNaN(guessedNumber) || guessedNumber < minNumber || guessedNumber > maxNumber) {
        alert(`Please enter a valid number between ${minNumber} and ${maxNumber}.`);
        continue;
    }   
    if (guessedNumber === targetNumber) {
        alert(`Congratulations! You've guessed the correct number ${targetNumber} in ${attempts} attempts.`);
        running = false;
    }
    else if (guessedNumber < targetNumber) {
        alert("Too low! Try again.");
    }
    else {
        alert("Too high! Try again.");
    }
}
