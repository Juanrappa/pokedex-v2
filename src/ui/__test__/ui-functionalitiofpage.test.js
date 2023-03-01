/**
  @jest-environment jsdom
 */
/* eslint-disable no-undef */
import {
  appearAndDisappear,
  GITHUB_URL_POKEDEX_V2,
} from "../ui-funtionalitiofpage.js";

describe("ui functionaliti", () => {
  describe("appear and disappear menu", () => {
    test("appear menu", () => {
      document.body.innerHTML = `
      <div id="menu" class="hidden">menu<div/>
      <button id="boton">click<button/>
      `;
      const $menu = document.querySelector("#menu");
      const $button = document.querySelector("#boton");
      $button.addEventListener("click", appearAndDisappear($menu));
      expect($menu.classList.contains("hidden")).toBe(false);
    });
    test("desappear menu ", () => {
      document.body.innerHTML = `
      <div id="menu" class="">menu<div/>
      <button id="boton">click<button/>
      `;
      const $menu = document.querySelector("#menu");
      const $button = document.querySelector("#boton");
      $button.addEventListener("click", appearAndDisappear($menu));
      expect($menu.classList.contains("hidden")).toBe(true);
    });
  });
  describe("send to a github", () => {
    const { location } = window;
    const getHrefSpy = jest.fn(() => GITHUB_URL_POKEDEX_V2);
    const setHrefSpy = jest.fn((href) => href);

    beforeAll(() => {
      delete window.location;
      window.location = {};
      Object.defineProperty(window.location, "href", {
        get: getHrefSpy,
        set: setHrefSpy,
      });
    });

    it("mocks window.location.href", () => {
      expect(getHrefSpy).not.toHaveBeenCalled();
      console.log(window.location.href);
      expect(getHrefSpy).toHaveBeenCalled();
    });

    afterAll(() => {
      window.location = location;
    });
  });
});
