const $button = document.querySelector("#boton");
const $menu = document.querySelector("#menu");
const $sentToAGithub = document.querySelector("#enviaragithub");

function appearAndDisappearMenu() {
  $menu.classList.toggle("hidden");
}
function sendToGithub() {
  window.location.href = "https://github.com/Juanrappa/pokedex-v2";
}
$button.addEventListener(`click`, appearAndDisappearMenu);
$sentToAGithub.addEventListener(`click`, sendToGithub);
