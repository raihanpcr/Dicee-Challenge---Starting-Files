//First Dice
var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

var resultNumber1 = `dice${randomNumber1}.png`;
console.log(resultNumber1);

var dice = document.querySelectorAll("img")[0];
console.log(dice);

console.log(dice.setAttribute('src', `images/dice${randomNumber1}.png`));

//Second Dice
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

var resultNumber2 = `dice${randomNumber2}.png`;
console.log(resultNumber2);

var dice = document.querySelectorAll("img")[1];
console.log(dice);

console.log(dice.setAttribute('src', `images/dice${randomNumber2}.png`));

//Win Lose Condition
if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
} else {
      document.querySelector("h1").innerHTML = "Draw";
}