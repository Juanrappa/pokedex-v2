export const getName = function (response) {
  let name = response.name;
  return name;
};
export const getAbilities = function (response) {
  let abilities = [];
  response.abilities.forEach(function (ability) {
    abilities.push(ability.ability.name);
  });
  return abilities;
};
export const getImg = function (response) {
  let img = response.sprites.front_default;
  return img;
};
export const getTypes = function (response) {
  let types = [];
  response.types.forEach(function (type) {
    types.push(type.type.name);
  });
  return types;
};
