import {
  getAbilities,
  getImg,
  getName,
  getTypes,
} from "./getElementsOfPokemons.js";
const URL = "https://pokeapi.co/api/v2/pokemon/";
const $container = document.querySelector("#containercards");
const $button = document.querySelector("#boton");
const $menu = document.querySelector("#menu");
const $sentToAGithub = document.querySelector("#enviaragithub");
let lastCard = "";
let pokemons = ``;
let next = "";

function appearAndDisappearMenu() {
  $menu.classList.toggle("hidden");
}
function sendToGithub() {
  window.location.href = "https://github.com/Juanrappa/pokedex";
}
$button.addEventListener(`click`, appearAndDisappearMenu);
$sentToAGithub.addEventListener(`click`, sendToGithub);

let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      displaypokemons(next);
    }
  });
}, {});
const createPokemonsHTML = function (response) {
  pokemons += `
    <div id="card" class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${getImg(response)}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${getName(response)}</div>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">tipo:</strong>${getTypes(
          response
        )}
      </p>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">habilidades:</strong>${getAbilities(
          response
        )} 
      </p>
    </div>
  </div>
    `;
};
const getpokemons = async function (result) {
  let url = result.url;
  let data = await fetch(url);
  let jsondata = await data.json();
  createPokemonsHTML(jsondata);
  $container.innerHTML = pokemons;
  let $cards = document.querySelectorAll("#card");
  lastCard = $cards[$cards.length - 1];
};
const displaypokemons = async function (URL) {
  let data = await fetch(URL);
  let jsonData = await data.json();
  let result = await jsonData.results;
  next = jsonData.next;
  await result.forEach(getpokemons);

  setTimeout(function () {
    observer.observe(lastCard);
  }, 1000);
};

displaypokemons(URL);
