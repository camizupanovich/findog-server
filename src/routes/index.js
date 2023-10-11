const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const GetDogs = require ('./GetDogs');
const PostDog = require('./PostDog');
const GetTemperaments = require('./GetTemperaments');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dog',PostDog);
router.use('/dogs',GetDogs);
router.use('/temperaments',GetTemperaments);

module.exports = router;
