const images = document.querySelectorAll(".card-img");

const imagesList = [
  "alien.png",
  "back.png",
  "bug.png",
  "duck.png",
  "rocket.png",
  "spaceship.png",
  "tiktac.png",
  "white.png",
];

images.forEach((img) => {
  img.src = `./assets/img/${imagesList[1]}`;
  img.addEventListener("click", () => {
    img.src = `./assets/img/${imagesList[2]}`;
  });
});
