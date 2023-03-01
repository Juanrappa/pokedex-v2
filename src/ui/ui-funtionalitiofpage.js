export const $button = document.querySelector("#boton");
export const $menu = document.querySelector("#menu");
export const $sentToAGithub = document.querySelector("#enviaragithub");
export const GITHUB_URL_POKEDEX_V2 = "https://github.com/Juanrappa/pokedex-v2";
export function appearAndDisappear(element) {
  element.classList.toggle("hidden");
}
export function redirectToGithub(URL) {
  window.location.href = URL;
}
