import { games } from "../script.js";

function renderGames() {
  const resultContainer = document.querySelector(".results__container");

  games.forEach((games) => {
    resultContainer.innerHTML += `<div class="games__container">
    <h4>${games.name}</h4>
    <span>${games.rating}</span>
    </div>`;
  });

  const gamesToggle = document.querySelectorAll(".games__container");

  gamesToggle.forEach((btn) => {
    btn.addEventListener("click", togglePlayed);
  });
}

renderGames();

function togglePlayed() {
  this.classList.toggle("played");
}
