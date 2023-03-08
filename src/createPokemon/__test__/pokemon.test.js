/// <reference types="jest" />
import * as data from "../../../cypress/fixtures/bulbasaur.json";
import { Pokemon } from "../pokemon";

describe("test class pokemon", () => {
  it("pokemon", () => {
    const bulbasaur = new Pokemon(data)
    expect(bulbasaur.name).toBe("bulbasaur")
    expect(bulbasaur.abilities).toString("overgrow", "chlorophyll")
    expect(bulbasaur.types).toString("grass","poison")
    expect(bulbasaur.img).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
  });
});
