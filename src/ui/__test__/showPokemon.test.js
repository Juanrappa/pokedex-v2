/**
  @jest-environment jsdom
 */
import { showPokemon } from "../showPokemons";
describe("test show pokemons",()=>{
    it("test show pokemons",()=>{
        document.body.innerHTML =`<div id="containercards"><div/>`
        const card = [`<div>hello<div/>`]
        const $container = document.querySelector("#containercards")
        showPokemon(card)
        expect($container).toString(`<div id="containercards"><div /><div>hello<div /></div></div>`)
    })
})