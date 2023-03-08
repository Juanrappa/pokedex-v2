export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.abilities = this.abilitie(data);
    this.types = this.type(data);
    this.img = data.sprites.front_default;
  }

  abilitie(data) {
    const abilities = [];
    data.abilities.forEach((ability) => {
      abilities.push(ability.ability.name);
    });
    return abilities;
  }

  type(data) {
    const types = [];
    data.types.forEach((type) => {
      types.push(type.type.name);
    });
    return types;
  }
}
