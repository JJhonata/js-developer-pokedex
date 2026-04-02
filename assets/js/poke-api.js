
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    // Prioridade: animada > oficial > dream world > padrão
    pokemon.photo = 
        pokeDetail.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
        pokeDetail.sprites.other?.['official-artwork']?.front_default ||
        pokeDetail.sprites.other?.dream_world?.front_default ||
        pokeDetail.sprites.front_default ||
        'https://via.placeholder.com/150'

    pokemon.height = (pokeDetail.height / 10).toFixed(2) // converter para metros
    pokemon.weight = (pokeDetail.weight / 10).toFixed(2) // converter para kg
    pokemon.abilities = pokeDetail.abilities.map((ability) => ability.ability.name)
    pokemon.moves = pokeDetail.moves.slice(0, 5).map((move) => move.move.name) // primeiros 5 ataques
    pokemon.stats = pokeDetail.stats.map((stat) => ({
        name: stat.stat.name,
        baseStat: stat.base_stat
    }))

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}