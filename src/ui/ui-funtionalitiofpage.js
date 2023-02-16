export const $button = document.querySelector("#boton");
export const $menu = document.querySelector("#menu");
export const $sentToAGithub = document.querySelector("#enviaragithub");

export function appearAndDisappearMenu() {
  $menu.classList.toggle("hidden");
}
export function redirectToGithub() {
  window.location.href = "https://github.com/Juanrappa/pokedex-v2";
}
