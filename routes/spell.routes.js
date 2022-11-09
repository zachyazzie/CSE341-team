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
// Get all spells
router.get('/', seeSpells)

//Get specific spellings
router.get('/:id', oneSpell)

//Post new spellings
router.post('/add', newSpell)

//Update spells
router.put('/:id', editSpell)

//Delete spells
router.delete('/:id', deleteSpell)

module.exports = router;