export const getName = (response) => {
  const name = [response.name];
  return name;
};
export const getAbilities = (response) => {
  const abilities = [];
  response.abilities.forEach((ability) => {
    abilities.push(ability.ability.name);
  });
  return abilities;
};
export const getImg = (response) => {
  const img = response.sprites.front_default;
  return img;
};
export const getTypes = (response) => {
  const types = [];
  response.types.forEach((type) => {
    types.push(type.type.name);
  });
  return types;
};
