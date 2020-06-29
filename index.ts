const colors: Array<string> = [
  "forest",
  "mountain",
  "island",
  "plains",
  "swamp",
];

function playerTurn(num: number): void {
  const playerImage: HTMLElement = document.getElementById("plyr");
  playerImage.setAttribute("src", `./img/${colors[num]}.png`);
  return computerTurn(num);
}

function computerTurn(playerNum: number): void {
  const computerImage: HTMLElement = document.getElementById("comp");
  const random: number = Math.floor(Math.random() * 5);
  computerImage.setAttribute("src", `./img/${colors[random]}.png`);
  return getWinner(playerNum, random);
}

function getWinner(playerNum: number, computerNum: number): void {
  console.log(playerNum);
  console.log(computerNum);
  const winner: HTMLElement = document.getElementById("winner");
  if (playerNum === computerNum) {
    winner.innerText = "It's a tie!";
    return;
  }
  if (
    (playerNum === 0 && computerNum === 3) ||
    (playerNum === 0 && computerNum === 4) ||
    (playerNum === 1 && computerNum === 4) ||
    (playerNum === 1 && computerNum === 0) ||
    (playerNum === 2 && computerNum === 0) ||
    (playerNum === 2 && computerNum === 1) ||
    (playerNum === 3 && computerNum === 1) ||
    (playerNum === 3 && computerNum === 2) ||
    (playerNum === 4 && computerNum === 2) ||
    (playerNum === 4 && computerNum === 3)
  ) {
    winner.innerText = "You win!";
    const playerScore: HTMLElement = document.getElementById("plyr-score");
    playerScore.innerText = (parseInt(playerScore.innerText) + 1).toString();
    return;
  }
  winner.innerText = "The computer wins!";
  const computerScore: HTMLElement = document.getElementById("comp-score");
  computerScore.innerText = (parseInt(computerScore.innerText) + 1).toString();
  return;
}

function reset(): void {
  const playerScore: HTMLElement = document.getElementById("plyr-score");
  const computerScore: HTMLElement = document.getElementById("comp-score");
  const winner: HTMLElement = document.getElementById("winner");
  playerScore.innerText = "0";
  computerScore.innerText = "0";
  winner.innerHTML = "<em>Please make a choice below to start playing!</em>";
  return;
}
