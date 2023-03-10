/**
  @jest-environment jsdom
 */
import { lastcard } from "../lastCard.js";
describe("test lastCard",()=>{
    it("test lastCard",()=>{
        document.body.innerHTML = `<div id="card"></div><div id="card"></div><div id="card">hola</div>`
        const result = lastcard()
        expect(result).toString('hola')
    })
})