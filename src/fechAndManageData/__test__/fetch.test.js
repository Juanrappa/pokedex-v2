
  import { returnFetchPokeApi, getpokemon } from "../fetch.js";
  import * as data from "./fixture-result-pokeapi.json";
  import * as bulbasaurData from "../../../cypress/fixtures/bulbasaur.json";
  import * as bulbasaur from "../../../cypress/fixtures/bulbasaur-url.json";
describe("test fetch.js", () => {
    jest.setTimeout(20000)
    it("test returnFetchPokeApi", async () => {
      const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
      const result = await returnFetchPokeApi(URL);

      console.log(result)
    });
    it("test getPokemon", async () => {
       
      const result = await getpokemon(bulbasaur);
      console.log(result)
    });
  });