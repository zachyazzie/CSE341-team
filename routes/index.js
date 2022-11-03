const express = require('express');
const router = express.Router();

const users = require('./users');
const characters = require('./characters');
const weapons = require('./weapons');
const spells = require('./spells');

router.use('/weapons', weapons);

module.exports = router;
