import "./styles.css";
import CardGame from "../../components/CardGame";

function createCards() {
  const cards = [];

  for (let i = 1; i <= 10; i++) {
    if (i == 1 || i == 4) cards.push(CardGame(`card${i}`, "pair1"));
    if (i == 2 || i == 5) cards.push(CardGame(`card${i}`, "pair2"));
    if (i == 3 || i == 8) cards.push(CardGame(`card${i}`, "pair3"));
    if (i == 6 || i == 10) cards.push(CardGame(`card${i}`, "pair4"));
    if (i == 9 || i == 7) cards.push(CardGame(`card${i}`, "pair5"));
  }
  return cards;
}

function BoardGame() {
  const cards = createCards();
  return /*html*/ `
      <section class="board-game">
          ${cards}
      </section>
    `;
}

export default BoardGame;
