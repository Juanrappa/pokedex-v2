import {
  getAbilities,
  getImg,
  getName,
  getTypes,
} from "../getElementsOfPokemons.js";
let page = 0;
let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`;
const $container = document.querySelector("#containercards");
let lastCard = "";
let pokemons = ``;

let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      page += 20;
      displaypokemons(URL);
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
export const displaypokemons = async function (URL) {
  let data = await fetch(URL);
  let jsonData = await data.json();
  let result = await jsonData.results;

  await result.forEach(getpokemons);

  setTimeout(function () {
    observer.observe(lastCard);
  }, 1000);
};

displaypokemons(URL);
