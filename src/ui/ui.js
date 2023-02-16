import { createPokemonsHTML } from "../createPokemons.js";
import {
  redirectToGithub,
  appearAndDisappearMenu,
  $button,
  $sentToAGithub,
} from "./ui-funtionalitiofpage.js";
let page = 0;
let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`;
const $container = document.querySelector("#containercards");
let lastCard = "";
let pokemons = ``;
$button.addEventListener(`click`, appearAndDisappearMenu);
$sentToAGithub.addEventListener(`click`, redirectToGithub);
let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      page += 20;
      displaypokemons(URL);
    }
  });
}, {});

const getpokemons = async function (result) {
  let url = result.url;
  let data = await fetch(url);
  let jsondata = await data.json();
  pokemons += createPokemonsHTML(jsondata);
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
