const express = require('express');
const router = express.Router();

const users = require('./users');
const characters = require('./characters');
const weapons = require('./weapons');
const spells = require('./spell.routes');

router.get('/', (req,res)=>{
    res.render('../views/index.hbs')
})
router.get('/about', (req,res)=>{
    res.render('../views/about.hbs')
})
router.use('/', require('./swagger'))
router.use('/weapons', weapons);
router.use('/characters', characters);
router.use('/spell', spells)

module.exports = router;
