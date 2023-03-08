import { lastcard } from "../fechAndManageData/lastCard.js";
import { returnPage } from "../fechAndManageData/returnPage.js";
import {
  redirectToGithub,
  appearAndDisappear,
  $button,
  $sentToAGithub,
  $menu,
  GITHUB_URL_POKEDEX_V2,
} from "../ui/ui-funtionalitiofpage.js";
import {
  returnDataOfEachPokemon,
  sortDataOfPokemon,
  createCards,
} from "../fechAndManageData/createPokemons.js";
import { returnFetchPokeApi } from "../fechAndManageData/fetch.js";
import { getpokemon } from "../fechAndManageData/fetch.js";
import { Pokemon } from "../createPokemon/pokemon.js";
import { createCard } from "../ui/createCard.js";
import { showPokemon } from "../ui/showPokemons.js";
$button.addEventListener("click", () => {
  appearAndDisappear($menu);
});
$sentToAGithub.addEventListener("click", () => {
  redirectToGithub(GITHUB_URL_POKEDEX_V2);
});
let page = 0;
const observer = new IntersectionObserver((inputs) => {
  inputs.forEach((input) => {
    if (input.isIntersecting) {
      page += 1;
      app(returnPage(page));
    }
  });
}, {});
const excuteObserver = () => {
  setTimeout(() => {
    observer.observe(lastcard());
  }, 1000);
};
const app = async (URL) => {
  const result = await returnFetchPokeApi(URL);
  const dataPokemons = await returnDataOfEachPokemon(result, getpokemon);
  const sortData = sortDataOfPokemon(dataPokemons, Pokemon);
  const cards = createCards(sortData, createCard);
  showPokemon(cards);
  excuteObserver();
};

app(returnPage(page));
