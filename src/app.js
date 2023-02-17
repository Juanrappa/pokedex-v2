import { getpokemon, returnPage, lastcard } from "./ui/ui.js";
import {
  redirectToGithub,
  appearAndDisappearMenu,
  $button,
  $sentToAGithub,
} from "./ui/ui-funtionalitiofpage.js";
$button.addEventListener(`click`, appearAndDisappearMenu);
$sentToAGithub.addEventListener(`click`, redirectToGithub);
let page = 0;
let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      page += 1;
      displaypokemons(returnPage(page));
    }
  });
}, {});
const displaypokemons = async function (URL) {
  const data = await fetch(URL);
  const jsonData = await data.json();
  const result = await jsonData.results;
  await result.forEach(getpokemon);
  setTimeout(function () {
    observer.observe(lastcard());
  }, 1000);
};

displaypokemons(returnPage(page));
