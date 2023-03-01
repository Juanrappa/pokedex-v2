/// <reference types="jest" />
import * as data from "../../../cypress/fixtures/bulbasaur.json";
import {
  getName,
  getImg,
  getAbilities,
  getTypes,
} from "../getElementsOfPokemons.js";
import { createPokemonsCard } from "../createPokemons.js";

describe("test get pokemon", () => {
  test("get name", () => {
    expect(getName(data)).toString("bulbasaur");
  });
  test("get img", () => {
    expect(getImg(data)).toEqual(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );
  });
  test("get abilities", () => {
    expect(getAbilities(data)).toEqual(["overgrow", "chlorophyll"]);
  });
  test("get types", () => {
    expect(getTypes(data)).toEqual(["grass", "poison"]);
  });
});
describe("create pokemon", () => {
  test("create pokemon", () => {
    expect(createPokemonsCard(data))
      .toString(`<div id="card" data-cy="card" data-name="bulbasaur" class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">bulbasaur</div>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">tipo:</strong>grass,poison
      </p>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">habilidades:</strong>overgrow,chlorophyll 
      </p>
    </div>
  </div>`);
  });
});
