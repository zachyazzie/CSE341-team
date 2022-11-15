const express = require('express');
const router = express.Router();

const usersRoute = require('./users');
const userInfoRoute = require("./userInfo");
const authorizationRoutes = require("./authorization");
const characters = require('./characters');
const weapons = require('./weapons');
const spells = require('./spell.routes');

router.use('/', require('./swagger'))
router.use('/weapons', weapons);
router.use('/characters', characters);
router.use('/spell', spells)
router.use("/users", usersRoute);
router.use("/authorization", authorizationRoutes);
router.use("/userinfo", userInfoRoute);


module.exports = router;
