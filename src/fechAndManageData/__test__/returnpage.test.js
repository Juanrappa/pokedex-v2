import { returnPage } from "../returnPage.js";
describe("test returnPage", () => {
    it("test returPage", () => {
      const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
      const page = returnPage(0);
      expect(page).toBe(URL);
    });
  });