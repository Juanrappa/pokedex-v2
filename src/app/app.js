import { getpokemon, returnPage, lastcard } from "../ui/ui.js";
import {
  redirectToGithub,
  appearAndDisappear,
  $button,
  $sentToAGithub,
  $menu,
  GITHUB_URL_POKEDEX_V2,
} from "../ui/ui-funtionalitiofpage.js";
import { Pokemon } from "../createPokemon/getElementsOfPokemons.js";

$button.addEventListener("click", () => {
  appearAndDisappear($menu);
});
$sentToAGithub.addEventListener("click", () => {
  redirectToGithub(GITHUB_URL_POKEDEX_V2);
});
let page = 0;

const displaypokemons = async (result) => {
  await result.forEach(async (datapokemon) => {
    const poke = await getpokemon(datapokemon);
    const card = new Pokemon(poke);
    card.showPokemon();
  });
};
const returnFetchPokeApi = async (URL) => {
  const data = await fetch(URL);
  const jsonData = await data.json();
  const result = await jsonData.results;
  return result;
};
const app = async (URL) => {
  const result = await returnFetchPokeApi(URL);
  displaypokemons(result);
  excuteObserver();
};
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

app(returnPage(page));
