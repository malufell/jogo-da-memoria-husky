import "./styles.css"

function PlayerScore(points, player) {
  return /*html*/`
    <p class="player-score" id=${player}>
      ${points}
    </p>
  `
}

export default PlayerScore;