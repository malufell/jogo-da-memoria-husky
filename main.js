import "./src/styles/settings/colors.css";
import "./src/styles/generics/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import ScoreGame from "./src/objects/ScoreGame";
import CardResult from "./src/components/CardResult";

const correctCards = [];
let activeCards = [];
let currentRound = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

const $root = document.querySelector("#root");
$root.insertAdjacentHTML(
  "beforeend",
  `
    ${ScoreGame(scorePlayer1, scorePlayer2)}
    ${BoardGame()}
  `
);

const $firstPlayer = document.getElementById("player-name1");
$firstPlayer.classList.add("active")

const $cards = document.querySelectorAll(".card-game");
for (const card of $cards) {
  card.addEventListener("click", function () {
    this.classList.add("card-game-verse");
    activeCards.push(card);

    if (activeCards.length == 2) {
      updateRound();
      checkResultRound();
    }

    if (correctCards.length === 5) {
      displayResult();
    }
  });
}

function updateRound() {
  const $namePlayer1 = document.getElementById("player-name1");
  const $namePlayer2 = document.getElementById("player-name2");
  currentRound++;

  setTimeout(function () {
    if (currentRound % 2 === 0) {
      $namePlayer2.classList.remove("active")
      $namePlayer1.classList.add("active")
    } else {
      $namePlayer1.classList.remove("active")
      $namePlayer2.classList.add("active")
    }
  }, 1000);
}

function checkResultRound() {
  if (activeCards[0].classList[1] == activeCards[1].classList[1]) {
    correctCards.push(activeCards[0].classList[1]);
    activeCards = [];
    scorePoint();
  } else {
    setTimeout(function () {
      activeCards.map(card => card.classList.remove("card-game-verse"))
      activeCards = [];
    }, 1000);
  }
}

function scorePoint() {
  const $scorePlayer1 = document.getElementById("player1");
  const $scorePlayer2 = document.getElementById("player2");

  if (currentRound % 2 === 0) {
    scorePlayer2++;
    $scorePlayer2.textContent = scorePlayer2;
  } else {
    scorePlayer1++;
    $scorePlayer1.textContent = scorePlayer1;
  }
}

function displayResult() {
  const winner = scorePlayer1 > scorePlayer2 ? "Player 1" : "Player 2";
  setTimeout(function () {
    $root.children[0].remove();
    $root.children[0].remove();
    $root.insertAdjacentHTML("afterbegin", CardResult(winner));
  }, 2000);
}
