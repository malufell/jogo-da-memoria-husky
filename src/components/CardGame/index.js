import "./styles.css";

function CardGame(id, classe) {
  return /*html*/ `
    <article class="card-game ${classe}" id=${id}></article>
  `;
}

export default CardGame;
