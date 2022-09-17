const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const typeRoute = require('./types');         //importando las rutas
const pokemonRoute = require('./pokemons'); 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemon", pokemonRoute);  
router.use("/type", typeRoute);    


module.exports = router;