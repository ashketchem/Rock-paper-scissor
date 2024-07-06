let human_score = 0, computer_score = 0;

const match = (computer, human) => {
  if (computer === human) {
    return "Nobody. Match is tied";
  } else if (computer === "rock" && human === "paper") {
    human_score += 1;
    return "human";
  } else if (computer === "rock" && human === "scissor") {
    computer_score += 1;
    return "computer";
  } else if (computer === "paper" && human === "rock") {
    computer_score += 1;
    return "computer";
  } else if (computer === "paper" && human === "scissor") {
    human_score += 1;
    return "human";
  } else if (computer === "scissor" && human === "rock") {
    human_score += 1;
    return "human";
  } else if (computer === "scissor" && human === "paper") {
    computer_score += 1;
    return "computer";
  }
}

for (let i = 1; i <= 5; i++) {
  console.log(`Round ${i}`);
  let humanChoice = prompt("choose one from 'rock', 'paper', 'scissor': ", "");
  let human = humanChoice.toLowerCase();
  let computerchoice = Math.floor(Math.random() * 3);
  let computer = ["rock", "paper", "scissor"][computerchoice];

  console.log(`Computer chose: ${computer}`);
  console.log(`Human chose: ${human}`);
  console.log(match(computer, human));
}

if (human_score > computer_score) {
  console.log("Human is the winner");
} else if (computer_score > human_score) {
  console.log("Computer is the winner");
} else {
  console.log("It's a tie");
}