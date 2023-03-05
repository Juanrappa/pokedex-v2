export const returnPage = (page) => {
  const numberofpage = page * 20;
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${numberofpage}&limit=20`;
  return URL;
};
