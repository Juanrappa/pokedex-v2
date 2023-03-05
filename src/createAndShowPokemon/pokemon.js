export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.abilities = this.abilities(data);
    this.types = this.types(data);
    this.img = data.sprites.front_default;
  }

  createCard() {
    return `
    <div id="card" data-cy="card" data-name="${this.name}" class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${this.img}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${this.name}</div>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">tipo:</strong>${this.types}
      </p>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">habilidades:</strong>${this.abilities} 
      </p>
    </div>
  </div>
    `;
  }

  abilities(data) {
    const abilities = [];
    data.abilities.forEach((ability) => {
      abilities.push(ability.ability.name);
    });
    return abilities;
  }

  types(data) {
    const types = [];
    data.types.forEach((type) => {
      types.push(type.type.name);
    });
    return types;
  }

  showPokemon() {
    const $container = document.querySelector("#containercards");
    $container.innerHTML += this.createCard();
  }
}
