/* eslint-disable no-undef */
import {
  getAbilities,
  getImg,
  getName,
  getTypes,
} from "./getElementsOfPokemons.js";

export const createPokemonsCard = (response) => `
    <div id="card" data-cy="card" data-name="${getName(
      response
    )}" class="max-w-xs rounded overflow-hidden shadow-lg">
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
