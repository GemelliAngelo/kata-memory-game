const cardImages = document.querySelectorAll(".card-img");

const errorEl = document.getElementById("errors");

const resultEl = document.getElementById("result");

const imgSrc = [
  "alien.png",
  "bug.png",
  "duck.png",
  "rocket.png",
  "spaceship.png",
  "tiktac.png",
];

const shuffled = [...imgSrc, ...imgSrc].sort(() => Math.random() - 0.5);

let errors = 0;

let flippedCards = [];
let lockBoard = false;

cardImages.forEach((card, index) => {
  card.dataset.img = shuffled[index];
  card.src = "./assets/img/back.png";

  card.addEventListener("click", () => {
    if (lockBoard) return;
    if (card.src.includes(card.dataset.img)) return;

    card.src = `./assets/img/${card.dataset.img}`;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lockBoard = true;

      const [first, second] = flippedCards;

      if (first.dataset.img === second.dataset.img) {
        flippedCards = [];
        lockBoard = false;
        checkWin();
      } else {
        errors++;
        errorEl.textContent = errors;

        setTimeout(() => {
          first.src = "./assets/img/back.png";
          second.src = "./assets/img/back.png";
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }
  });
});

function checkWin() {
  const allMatched = Array.from(cards).every((card) =>
    card.src.includes(card.dataset.img)
  );

  if (allMatched) {
    resultEl.textContent = "Hai vinto!";
  }
}
