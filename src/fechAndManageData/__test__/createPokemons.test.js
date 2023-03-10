/// <reference types="jest" />
import {
  returnDataOfEachPokemon,
  sortDataOfPokemon,
  createCards,
} from "../createPokemons.js";
import * as bulbasaurData from "../../../cypress/fixtures/bulbasaur.json";
import { Pokemon } from "../../createPokemon/pokemon.js";
import { createCard } from "../../ui/createCard.js";
const dataOfPokemons = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
  { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
  { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
  { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
  { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
  { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
  { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
  { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
  { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
  { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
  { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
  { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
];

  describe("test createPokemons", () => {
    it("test returnDataOfPokemons", async () => {
      const pokemon = jest.fn();
      const result = await returnDataOfEachPokemon(dataOfPokemons, pokemon);
      const number = 20;
      expect(pokemon).toHaveBeenCalledTimes(number);
    });
    it("test sordDataOfPokemons", () => {
      const dataOfBulbasar = [
        {
          name: "bulbasaur",
          abilities: ["overgrow", "chlorophyll"],
          types: ["grass", "poison"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      ];
      const result = sortDataOfPokemon([bulbasaurData], Pokemon);
      console.log(result);
      expect(result).toEqual(dataOfBulbasar);
    });
    it("test createCards",()=>{
        const dataOfBulbasar = [
            {
              name: "bulbasaur",
              abilities: ["overgrow", "chlorophyll"],
              types: ["grass", "poison"],
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            },
          ];
          const bulbasaur =  [                                                                                                                                        
            '\n' +                                                                                                                                 
              '    <div id="card" data-cy="card" data-name="bulbasaur" class="max-w-xs rounded overflow-hidden shadow-lg">\n' +                    
              '    <img class="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Sunset in the mountains">\n' +                                                                                                                                 
              '    <div class="px-6 py-4">\n' +                                                                                                    
              '      <div class="font-bold text-xl mb-2">bulbasaur</div>\n' +
              '      <p class="text-gray-700 text-base">\n' +
              '        <strong class="font-bold text-lg text-black">tipo:</strong>grass,poison\n' +
              '      </p>\n' +
              '      <p class="text-gray-700 text-base">\n' +
              '        <strong class="font-bold text-lg text-black">habilidades:</strong>overgrow,chlorophyll \n' +
              '      </p>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '    '
          ]
        const result = createCards(dataOfBulbasar,createCard)
        expect(result).toEqual(bulbasaur)

    })
  });

