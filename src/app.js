import {
  getAbilities,
  getImg,
  getName,
  getTypes,
} from "./auxiliary-functions.js";
import {
  $button,
  $sentToAGithub,
  sendToGithub,
  appearAndDisappearMenu,
} from "./main.js";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const $container = document.querySelector("#containercards");
let pokemons = ``;
let next = "";
$button.addEventListener(`click`, appearAndDisappearMenu);
$sentToAGithub.addEventListener(`click`, sendToGithub);

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
};
const displaypokemons = async function (URL) {
  let data = await fetch(URL);
  let jsonData = await data.json();
  let result = await jsonData.results;
  next = jsonData.next;
  await result.forEach(getpokemons);
  setTimeout(function () {
    let $cards = document.querySelectorAll("#card");
    let lastCard = $cards[$cards.length - 1];
    observer.observe(lastCard);
  }, 1000);
};
let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      displaypokemons(next);
    }
  });
}, {});
displaypokemons(URL);
