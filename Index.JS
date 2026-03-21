
let userScore = 0;
let compScore = 0;

let historyDiv = document.getElementById("history");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function play(userChoice) {
    let compChoice = getComputerChoice();
    let result = "";

    if (userChoice === compChoice) {
        result = "It's a Draw 🤝";
    } 
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        result = "You Win 🎉";
        userScore++;
        document.getElementById("winSound").play();
    } 
    else {
        result = "You Lose 😢";
        compScore++;
        document.getElementById("loseSound").play();
    }

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;

    document.getElementById("result").innerText = 
        `You: ${userChoice} | Computer: ${compChoice} → ${result}`;

    // ✅ HISTORY ADD HO RAHA HAI
    updateHistory(userChoice, compChoice, result);
}

function updateHistory(player, computer, result) {
    let entry = document.createElement("div");
    entry.innerText = `You: ${player} | Computer: ${computer} → ${result}`;
    historyDiv.prepend(entry);
}

function resetGame() {
    userScore = 0;
    compScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("compScore").innerText = 0;
    document.getElementById("result").innerText = "Game Restarted 🔄";

    // ✅ history clear
    historyDiv.innerHTML = "";
}