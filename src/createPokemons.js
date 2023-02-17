const getName = function (response) {
  let name = response.name;
  return name;
};
const getAbilities = function (response) {
  let abilities = [];
  response.abilities.forEach(function (ability) {
    abilities.push(ability.ability.name);
  });
  return abilities;
};
const getImg = function (response) {
  let img = response.sprites.front_default;
  return img;
};
const getTypes = function (response) {
  let types = [];
  response.types.forEach(function (type) {
    types.push(type.type.name);
  });
  return types;
};
export const createPokemonsCard = function (response) {
  return `
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
