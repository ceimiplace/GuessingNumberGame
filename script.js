let game = {};
let startButton = document.querySelector(".start");
startButton.addEventListener("click", startGame);
let randomNumber = Math.ceil(Math.random() * 9);
function startGame() {
  game.start = document.querySelector(".start");
  game.output = document.querySelector(".output");
  game.message = document.querySelector(".message");
  game.input = document.querySelector("input");
  game.button = document.querySelector(".guess");
  game.button.addEventListener("click", checkNumber);
  game.start.style.color = "green";
  game.start.textContent = "Game started";
  game.input.setAttribute("placeholder", "Enter your number");
  game.message.textContent = "Please pick a number between 1-10";
}

function checkNumber() {
  if (game.input.value < randomNumber) {
    game.message.textContent = "Too low";
    game.input.value = "";
  } else if (game.input.value > randomNumber) {
    game.message.textContent = "Too high";
  } else {
    game.message.textContent = "Nailed it";
    game.input.value = "";
  }
}
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  game.message.textContent = "Welcome to my game";
  randomNumber = Math.ceil(Math.random() * 9);
  game.input.removeAttribute("placeholder");
});
