export const returnPage = (page) => {
  const numberofpage = page * 20;
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${numberofpage}&limit=20`;
  return URL;
};
export const lastcard = () => {
  const $cards = document.querySelectorAll("#card");
  const card = $cards[$cards.length - 1];
  return card;
};
export const getpokemon = async (result) => {
  const url = [result.url];
  const data = await fetch(url);
  const jsondata = await data.json();
  return jsondata;
};
