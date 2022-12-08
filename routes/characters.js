const { Router } = require('express');
const charactersController = require('../controllers/characters');
const router = Router();
const loadUser = require("../middleware/loadUser");

// require user - middleware - let's load the user before we proceed
router.use([loadUser]);

router.post('/create', charactersController.createCharacter);
router.get('/all', charactersController.getAllCharacters);
router.get('/:id', charactersController.getOneCharacter);
router.put('/:id', charactersController.updatedCharacter);
router.delete('/:id', charactersController.deleteCharacter);

module.exports = router;

