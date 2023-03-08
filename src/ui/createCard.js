export const createCard = (pokemonData) => {
    return `
    <div id="card" data-cy="card" data-name="${pokemonData.name}" class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${pokemonData.img}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${pokemonData.name}</div>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">tipo:</strong>${pokemonData.types}
      </p>
      <p class="text-gray-700 text-base">
        <strong class="font-bold text-lg text-black">habilidades:</strong>${pokemonData.abilities} 
      </p>
    </div>
  </div>
    `;
  }