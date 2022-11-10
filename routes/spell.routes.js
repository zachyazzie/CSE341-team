var cors = require('cors')
const express = require('express');
const router = express.Router();
const {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell
} = require('../controllers/spell.constrollers')
const loadUser = require("../middleware/loadUser");

// require user - middleware - let's load the user before we proceed
// router.use([loadUser]); -- add this when we want to hook up auth0

// Get all spells
router.get('/', seeSpells)

//Get specific spellings
router.get('/:id', oneSpell)

//Post new spellings
router.post('/', newSpell)

//Update spells
router.put('/:id', editSpell)

//Delete spells
router.delete('/:id', deleteSpell)

module.exports = router;