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
import { displaypokemons } from "../fechAndManageData/displayPokemons.js";
import { returnFetchPokeApi } from "../fechAndManageData/fetch.js";

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
  displaypokemons(result);
  excuteObserver();
};

app(returnPage(page));
