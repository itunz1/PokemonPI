const { Router } = require('express')
const {
  getAllPokemons,
  getPokemonByIdApi,
  getPokemonByIdDb,
  getPokemonByNameApi,
  getPokemonByNameDb,
  getAllPoke,
  getPokemonDb,
} = require('../controllers/pokemonController')
const { Pokemon, Type } = require('../db')
const router = Router()

//          GET POKEMOS / NAME         

router.get('/', async (req, res) => {
  const name = req.query.name

  if (!name) {
    const allPokemon = await getAllPoke()
    res.send(allPokemon)
  } else {
    let pokemonDb = await getPokemonByNameDb(name)
    let pokemonApi = await getPokemonByNameApi(name)

    let pokemonByName

    if (pokemonDb && pokemonDb !== 'Pokemon no encontrado') {
      pokemonByName = pokemonDb
    }
    if (pokemonApi && pokemonApi !== 'Pokemon no encontrado') {
      pokemonByName = [pokemonApi]
    }

    if (pokemonByName.length > 0) {
      res.send(pokemonByName)
    } else {
      res.status(404).send('Pokemon no encontrado')
    }
  }
})

     

router.get('/:id', async (req, res) => {

  try {
    const { id } = req.params
    if (id.length < 5) {
      let searchIdApi = await getPokemonByIdApi(id)
      res.status(200).send(searchIdApi)
    } else {
      let searchIdDb = await getPokemonByIdDb(id)
      res.status(200).send(searchIdDb)
    }
  } catch (error) {
    res.status(404).send('Error')
  }
})

//          POST POKEMON         

router.post('/', async (req, res) => {
  const { name, height, weight, hp, attack, speed, defense, types, image, createInData } = req.body;
  let pokes = await getAllPoke();
  try {
      if (pokes.filter(p => p.name === name).length === 0) {
          const newPoke = await Pokemon.create({ name, height, weight, hp, attack, speed, image, defense, createInData});
          const t = await Type.findAll({ where: { name: types } });
          await newPoke.addType(t);
          res.json(newPoke)
      } else {
          throw new Error('pokemon ya existe');
      }

  } catch (e) {
      res.status(400).json(e.message);
  };
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    let deletePoke = await getAllPoke();
    try{
      deletePoke.filter((ele, index) => {
        if(ele.id === id){
          Pokemon.destroy({
            where : {id : id}
          })
        }
      })
      res.json(deletePoke)
    }catch(err){
      res.status(400).json(err)
    }
})

module.exports = router
