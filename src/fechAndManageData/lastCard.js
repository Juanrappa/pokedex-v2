export const lastcard = () => {
  const $cards = document.querySelectorAll("#card");
  const card = $cards[$cards.length - 1];
  return card;
};
