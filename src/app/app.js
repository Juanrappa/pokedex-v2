import { getpokemon, returnPage, lastcard, showPokemons, a } from "../ui/ui.js";
import {
  redirectToGithub,
  appearAndDisappear,
  $button,
  $sentToAGithub,
  $menu,
  GITHUB_URL_POKEDEX_V2,
} from "../ui/ui-funtionalitiofpage.js";
import { createPokemonsCard } from "../createPokemon/createPokemons.js";

const pokemons = [];
$button.addEventListener("click", () => {
  appearAndDisappear($menu);
});
$sentToAGithub.addEventListener("click", () => {
  redirectToGithub(GITHUB_URL_POKEDEX_V2);
});
let page = 0;

const displaypokemons = async (URL) => {
  const data = await fetch(URL);
  const jsonData = await data.json();
  const result = await jsonData.results;
  result.forEach(showPokemons(createPokemonsCard(a)));
  excuteObserver();
};
const observer = new IntersectionObserver((inputs) => {
  inputs.forEach((input) => {
    if (input.isIntersecting) {
      page += 1;
      displaypokemons(returnPage(page));
    }
  });
}, {});
const excuteObserver = () => {
  setTimeout(() => {
    observer.observe(lastcard());
  }, 1000);
};

displaypokemons(returnPage(page));
