import { createPokemonsCard } from "../createPokemons.js";
let pokemons = [];
export const returnPage = function (page) {
  let numberofpage = page * 20;
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${numberofpage}&limit=20`;
  return URL;
};
export const lastcard = function () {
  const $cards = document.querySelectorAll("#card");
  const card = $cards[$cards.length - 1];
  return card;
};
const showPokemons = function () {
  const $container = document.querySelector("#containercards");
  $container.innerHTML = pokemons;
};
export const getpokemon = async function (result) {
  const url = result.url;
  const data = await fetch(url);
  const jsondata = await data.json();
  pokemons += createPokemonsCard(jsondata);
  showPokemons();
};
