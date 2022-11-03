const { Router } = require('express');
const weaponsController = require('../controllers/weapons');

const router = Router();

router.get('/all', weaponsController.getAllWeapons);

router.get('/one/:postId', weaponsController.getOneWeapon);

router.post('/create', weaponsController.createWeapon);

module.exports = router;
