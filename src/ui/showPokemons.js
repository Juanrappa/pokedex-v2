export const showPokemon = (cards) => {
    const $container = document.querySelector("#containercards");
    cards.forEach((card) => {
      $container.innerHTML += card
    });
  }