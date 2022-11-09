const { Router } = require('express');
const charactersController = require('../controllers/characters');

const router = Router();

router.post('/create', charactersController.createCharacter);

router.get('/all', charactersController.getAllCharacters);

router.get('/:id', charactersController.getOneCharacter);

router.put('/:id', charactersController.updatedCharacter);

router.delete('/:id', charactersController.deleteCharacter);


module.exports = router;

