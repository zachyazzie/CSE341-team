const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'))
router.use('/spell', require('./spell.routes'))

module.exports = router;