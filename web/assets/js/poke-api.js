
const pokeapi = {}


function getPokemonDetail(pokeDetail)
{
    const pokemon = new Pokemon();

    pokemon.id = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typleSlot) => typleSlot.type.name)
    const [type] = types
    pokemon.type = type
    pokemon.types = types

    pokemon.urlfoto = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

pokeapi.getPokemonsDetails = (pokemon) =>{
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(getPokemonDetail)
}

pokeapi.getPokemons = ( offset = 0,limit = 100) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) // pega um elemento do json
        .then((pokemons) => pokemons.map(pokeapi.getPokemonsDetails))
        .then((detalhesRequisicao) => Promise.all(detalhesRequisicao))
        .then((pokemondetalhes) => pokemondetalhes)
}   

