var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function playerOneDiceRoll() {

    if (randomNumber1 === 1) {
        document.querySelector(".img1").src = "images/dice1.png";
    }   else if (randomNumber1 === 2) {
        document.querySelector(".img1").src = "images/dice2.png";
    }   else if (randomNumber1 === 3) {
        document.querySelector(".img1").src = "images/dice3.png";
    }   else if (randomNumber1 === 4) {
        document.querySelector(".img1").src = "images/dice4.png";
    }   else if (randomNumber1 === 5) {
        document.querySelector(".img1").src = "images/dice5.png";
    }   else {
        document.querySelector(".img1").src = "images/dice6.png";
}
return randomNumber1;
}

function playerTwoDiceRoll() {

    if (randomNumber2 === 1) {
        document.querySelector(".img2").src = "images/dice1.png";
    }   else if (randomNumber2 === 2) {
        document.querySelector(".img2").src = "images/dice2.png";
    }   else if (randomNumber2 === 3) {
        document.querySelector(".img2").src = "images/dice3.png";
    }   else if (randomNumber2 === 4) {
        document.querySelector(".img2").src = "images/dice4.png";
    }   else if (randomNumber2 === 5) {
        document.querySelector(".img2").src = "images/dice5.png";
    }   else {
        document.querySelector(".img2").src = "images/dice6.png";
}
return randomNumber2;
}

function whoWins() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
}

playerOneDiceRoll();
playerTwoDiceRoll();
whoWins();

