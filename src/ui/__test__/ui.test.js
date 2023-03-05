/**
  @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { returnPage, lastcard } from "../ui.js";

describe("test ui.js", () => {
  test("test returnPage", () => {
    const NUMBER_OF_PAGE = 1;
    const URL_PAGE = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`;
    expect(returnPage(NUMBER_OF_PAGE)).toString(URL_PAGE);
  });
  test("test lastCard", () => {
    document.body.innerHTML = `
    <div id="card" >1<div/>
    <div id="card" >2<div/>
    <div id="card" >3<div/>
    `;
    expect(lastcard()).toString("3");
  });
});
