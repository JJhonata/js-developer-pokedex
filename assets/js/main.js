const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonModal = document.getElementById('pokemonModal')
const closeBtn = document.querySelector('.close')

const maxRecords = 151
const limit = 10
let offset = 0;

function openPokemonModal(pokemon) {
    document.getElementById('modalName').textContent = pokemon.name
    document.getElementById('modalNumber').textContent = `#${pokemon.number}`
    document.getElementById('modalImg').src = pokemon.photo
    document.getElementById('modalImg').alt = pokemon.name
    document.getElementById('modalHeight').textContent = pokemon.height
    document.getElementById('modalWeight').textContent = pokemon.weight

    // Tipos
    const typesContainer = document.getElementById('modalTypes')
    typesContainer.innerHTML = pokemon.types
        .map((type) => `<li class="type ${type}">${type}</li>`)
        .join('')

    // Habilidades
    const abilitiesContainer = document.getElementById('modalAbilities')
    abilitiesContainer.innerHTML = pokemon.abilities
        .map((ability) => `<li>${ability}</li>`)
        .join('')

    // Ataques
    const movesContainer = document.getElementById('modalMoves')
    movesContainer.innerHTML = pokemon.moves
        .map((move) => `<li>${move}</li>`)
        .join('')

    // Stats
    const statsContainer = document.getElementById('modalStats')
    statsContainer.innerHTML = pokemon.stats
        .map((stat) => `<li><strong>${stat.name}:</strong> ${stat.baseStat}</li>`)
        .join('')

    pokemonModal.style.display = 'block'
}

function closePokemonModal() {
    pokemonModal.style.display = 'none'
}

closeBtn.addEventListener('click', closePokemonModal)

window.addEventListener('click', (event) => {
    if (event.target == pokemonModal) {
        closePokemonModal()
    }
})

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" data-pokemon='${JSON.stringify(pokemon)}'>
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml

        // Adicionar evento de clique em cada card
        document.querySelectorAll('.pokemon').forEach((pokemonCard) => {
            pokemonCard.addEventListener('click', () => {
                const pokemonData = JSON.parse(pokemonCard.dataset.pokemon)
                openPokemonModal(pokemonData)
            })
        })
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})