export const returnFetchPokeApi = async (URL) => {
  const data = await fetch(URL);
  const jsonData = await data.json();
  const result = await jsonData.results;
  return result;
};
export const getpokemon = async (result) => {
  const url = [result.url];
  const data = await fetch(url);
  const jsondata = await data.json();
  return jsondata;
};
