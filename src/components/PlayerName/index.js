import "./styles.css"

function PlayerName(name, id) {
  return /*html*/`
    <p class="player-name" id=${id}>
      ${name}
    </p>
  `
}

export default PlayerName;