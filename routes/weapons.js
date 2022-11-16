const { Router } = require('express');
const weaponsController = require('../controllers/weapons');
const router = Router();
const loadUser = require('../middleware/loadUser');

// require user - middleware - let's load the user before we proceed
// router.use([loadUser]); -- add this when we want to hook up auth0

router.get('/all', weaponsController.getAllWeapons);

router.get('/one/:postId', weaponsController.getOneWeapon);

router.post('/create', weaponsController.createWeapon);

router.put('/:postId', weaponsController.updateWeapon);

router.delete('/:postId', weaponsController.deleteWeapon);

module.exports = router;
