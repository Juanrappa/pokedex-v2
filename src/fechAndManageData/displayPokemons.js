export const returnDataOfEachPokemon = async (result, getDataPokemon) => {
  const data = result;
  let dataPokemons = [];
  for (let element of data) {
    let poke = await getDataPokemon(element);
    dataPokemons.push(poke);
  }
  return dataPokemons;
};
export const sortDataOfPokemon = (dataOfPokemons, pokemonclass) => {
  let sortingDataPokemons = [];
  dataOfPokemons.forEach((data) => {
    const pokemon = new pokemonclass(data);
    sortingDataPokemons.push(pokemon);
  });
  return sortingDataPokemons;
};
export const createCards = (pokemons, functionCreateCard) => {
  let cards = [];
  pokemons.forEach((pokemon) => {
    const cardPokemon = functionCreateCard(pokemon);
    cards.push(cardPokemon);
  });
  return cards;
};


