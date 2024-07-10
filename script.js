let human_score = 0, computer_score = 0;
let human_choice, computer_choice, human_Score, computer_Score, results, btn, round;
human_Score = document.querySelector('#humanScore');
computer_Score = document.querySelector("#computeScore");
human_choice = document.querySelector("#user-choice");
computer_choice = document.querySelector("#computer-choice");
results = document.querySelector("#resultText");
btn = document.querySelectorAll(".btn");
round = document.querySelector("#round");


const match = (computer, human) => {
  if (computer === human) {
    return "Nobody. Match is tied";
  } else if (computer === "rock" && human =="") {
    return "invalid input, try again"
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
 round.textContent = (`Round ${i}`);
  let humanChoice = document.querySelectorAll('.btn').forEach(btn => {
   btn.addEventListener( 'click', () => {
     humanChoice = btn.id;
   })
  });
  let human = humanChoice.toLowerCase();
  let computerchoice = Math.floor(Math.random() * 3);
  let computer = ["rock", "paper", "scissor"][computerchoice];

  human_choice.textContent =(`Computer chose: ${computer}`);
  computer_choice.textContent = (`Human chose: ${human}`);
  console.log(match(computer, human));
}

if (human_score > computer_score) {
  resultText.textContent = ("Human is the winner");
} else if (computer_score > human_score) {
  resultText.textContent = ("Computer is the winner");
} else {
  resultText.textContent = ("It's a tie");
}