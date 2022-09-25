const axios = require('axios')
const { Pokemon, Type } = require('../db')


const getPokemonDb = async () => {
  try {
    const pokemonsDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name'],
        through: {
          attributer: [],
        },
      },
    })

    return pokemonsDb
  } catch (error) {
    console.log(error)
  }
}


const getPokemonByIdDb = async (id) => {
  try {
    let searchIdDb = await Pokemon.findByPk(id, { include: { model: Type } })

    let searchIdPokemonDb = {
      id: searchIdDb.id,
      image: searchIdDb.image,
      name: searchIdDb.name,
      types: searchIdDb.types.map((t) => t.name),
      hp: searchIdDb.hp,
      attack: searchIdDb.attack,
      defense: searchIdDb.defense,
      speed: searchIdDb.speed,
      height: searchIdDb.height,
      weight: searchIdDb.weight,
    }

    return searchIdPokemonDb
  } catch (error) {
    return 'Pokemon no encontrado'
  }
}



const getPokemonByIdApi = async (id) => {
  try {
    let searchIdApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if (searchIdApi) {
      let searchIdPokemonApi = {
        id: searchIdApi.data.id,
        name: searchIdApi.data.name,
        types: searchIdApi.data.types.map((e) => e.type.name),
        hp: searchIdApi.data.stats[0].base_stat,
        attack: searchIdApi.data.stats[1].base_stat,
        defense: searchIdApi.data.stats[2].base_stat,
        speed: searchIdApi.data.stats[5].base_stat,
        height: searchIdApi.data.height,
        weight: searchIdApi.data.weight,
        image: searchIdApi.data.sprites.other.dream_world.front_default,
      }

      return searchIdPokemonApi
    }
  } catch (error) {
    return 'Pokemon no encontrado'
  }
}



const getPokemonByNameApi = async (name) => {
  try {
    let nameApi = name.toLowerCase()
    const pokemonApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nameApi}/`,
    )

    let nameSearchApi = {
      id: pokemonApi.data.id,
      name: pokemonApi.data.name,
      types: pokemonApi.data.types.map((e) => e.type.name),
      hp: pokemonApi.data.stats[0].base_stat,
      attack: pokemonApi.data.stats[1].base_stat,
      defense: pokemonApi.data.stats[2].base_stat,
      speed: pokemonApi.data.stats[5].base_stat,
      height: pokemonApi.data.height,
      weight: pokemonApi.data.weight,
      image: pokemonApi.data.sprites.other.dream_world.front_default,
    }

    return nameSearchApi
  } catch (error) {
    return 'Pokemon no encontrado'
  }
}



const getPokemonByNameDb = async (name) => {
  try{
    const pokemonsDb2 = await getPokemonDb()
    const pokemonsDb2Filter = pokemonsDb2.filter(
      (p) => p.name.toLowerCase() === name.toLowerCase(),
    )
    return pokemonsDb2Filter
  }catch (error) {
    return 'Error de DB Pokemon no encontrado'
  }
}

const getApiInfo = async () => {
const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
    const results = apiUrl.data.results

    const pokemonInfo = []
    
    for(let i = 0 ; i < results.length ; i++){
      const pokes = await axios.get(results[i].url);
      const pokeInfo = pokes.data;

      pokemonInfo.push({
        id: pokeInfo.id,
        name: pokeInfo.name,
        types: pokeInfo.types.map((t) => t.type.name),
        image: pokeInfo.sprites.other['official-artwork'].front_default,
        attack: pokeInfo.stats[1].base_stat,
        weight: pokeInfo.weight,
        defense: pokeInfo.stats[2].base_stat,
        speed: pokeInfo.stats[5].base_stat,
        height: pokeInfo.height
      });
    }
    
    return pokemonInfo;
}

const getAllPoke = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getPokemonDb();
  const infoTotal = [...apiInfo, ...dbInfo]; 

  return infoTotal;
}

module.exports = {
  getPokemonDb,
  getPokemonByIdApi,
  getPokemonByIdDb,
  getPokemonByNameApi,
  getPokemonByNameDb,
  getAllPoke,
  getPokemonDb,
}
