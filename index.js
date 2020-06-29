var colors = [
    "forest",
    "mountain",
    "island",
    "plains",
    "swamp",
];
function playerTurn(num) {
    var playerImage = document.getElementById("plyr");
    playerImage.setAttribute("src", "./img/" + colors[num] + ".png");
    return computerTurn(num);
}
function computerTurn(playerNum) {
    var computerImage = document.getElementById("comp");
    var random = Math.floor(Math.random() * 5);
    computerImage.setAttribute("src", "./img/" + colors[random] + ".png");
    return getWinner(playerNum, random);
}
function getWinner(playerNum, computerNum) {
    console.log(playerNum);
    console.log(computerNum);
    var winner = document.getElementById("winner");
    if (playerNum === computerNum) {
        winner.innerText = "It's a tie!";
        return;
    }
    if ((playerNum === 0 && computerNum === 3) ||
        (playerNum === 0 && computerNum === 4) ||
        (playerNum === 1 && computerNum === 4) ||
        (playerNum === 1 && computerNum === 0) ||
        (playerNum === 2 && computerNum === 0) ||
        (playerNum === 2 && computerNum === 1) ||
        (playerNum === 3 && computerNum === 1) ||
        (playerNum === 3 && computerNum === 2) ||
        (playerNum === 4 && computerNum === 2) ||
        (playerNum === 4 && computerNum === 3)) {
        winner.innerText = "You win!";
        var playerScore = document.getElementById("plyr-score");
        playerScore.innerText = (parseInt(playerScore.innerText) + 1).toString();
        return;
    }
    winner.innerText = "The computer wins!";
    var computerScore = document.getElementById("comp-score");
    computerScore.innerText = (parseInt(computerScore.innerText) + 1).toString();
    return;
}
function reset() {
    var playerScore = document.getElementById("plyr-score");
    var computerScore = document.getElementById("comp-score");
    var winner = document.getElementById("winner");
    var playerImage = document.getElementById("plyr");
    var computerImage = document.getElementById("comp");
    playerImage.setAttribute("src", "./img/blank.png");
    computerImage.setAttribute("src", "./img/blank.png");
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    winner.innerHTML = "<em>Please make a choice below to start playing!</em>";
    return;
}
