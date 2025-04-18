let randomNumber = Math.floor(Math.random() * 5) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 5:"));
if (guess === randomNumber) {
  alert("You guessed right!");
} else {
  alert("Wrong guess. The number was " + randomNumber);
}
