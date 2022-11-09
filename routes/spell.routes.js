var cors = require('cors')
const express = require('express');
const router = express.Router();
const {
    deleteSpell,
    seeSpells,
    newSpell,
    oneSpell,
    editSpell,
    testGetSpells
} = require('../controllers/spell.constrollers')
// Get all spells
router.get('/', seeSpells)

//Get specific spellings
router.get('/one/:id', oneSpell)

//Post new spellings
router.post('/add', newSpell)

//Update spells
router.put('/edit/:id', editSpell)

//Delete spells
router.delete('/delete/:id', deleteSpell)

//Test Spell Routes
router.get('/test', testGetSpells)

module.exports = router;