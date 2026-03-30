const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=30";
const container = document.getElementById('pokemon-container');

const getPokemon = async () => {
    try {
        const response = await fetch(URL_API);
        
        if (!response.ok) {
            throw new Error(`Gagal mengambil data: ${response.status}`);
        }

        const data = await response.json();
        const pokemonList = data.results;

        const pokemonPromises = pokemonList.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            return await detailResponse.json();
        });

        const allPokemonData = await Promise.all(pokemonPromises);
        renderPokemonList(allPokemonData);

    } catch (error) {
        console.error("Error:", error);
        container.innerHTML = `<p style="text-align:center; color:red;">Gagal memuat data Pokémon.</p>`;
    }
}

function renderPokemonList(pokemonArray) {
    const fragment = document.createDocumentFragment();

    pokemonArray.forEach(poke => {
        const card = createCardElement(poke);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function createCardElement(poke) {
    const card = document.createElement('article');
    card.className = 'card';

    const typeBadges = poke.types
        .map(t => `<span class="type-badge">${t.type.name}</span>`)
        .join('');

    card.innerHTML = `
        <img src="${poke.sprites.front_default}" alt="${poke.name}" loading="lazy">
        <h3>${poke.name}</h3>
        <div class="types-container">${typeBadges}</div>
    `;

    return card;
}

getPokemon();