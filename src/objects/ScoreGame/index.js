import "./styles.css";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";

function ScoreGame(pointsPlayer1, pointsPlayer2) {
  return /*html*/ `
        <section class="score-game">
            ${PlayerName("Player 1", "player-name1")}
            ${PlayerScore(pointsPlayer1, "player1")}
            <span>VS</span>
            ${PlayerScore(pointsPlayer2, "player2")}
            ${PlayerName("Player 2", "player-name2")}
        </section>
    `;
}

export default ScoreGame;
