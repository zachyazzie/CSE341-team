const express = require('express');
const router = express.Router();

const users = require('./users');
const characters = require('./characters');
const weapons = require('./weapons');
const spells = require('./spell.routes');

router.use('/', require('./swagger'))
router.use('/weapons', weapons);
router.use('/characters', characters);
router.use('/spell', spells)

module.exports = router;
