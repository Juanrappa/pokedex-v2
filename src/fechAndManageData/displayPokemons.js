import { getpokemon } from "./fetch.js";
import { Pokemon } from "../createAndShowPokemon/pokemon.js";

export const displaypokemons = async (result) => {
  await result.forEach(async (datapokemon) => {
    const poke = await getpokemon(datapokemon);
    const card = new Pokemon(poke);
    card.showPokemon();
  });
};
