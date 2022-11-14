const express = require("express")
const router = express.Router();

const AuthorizationController = require("../controllers/authorization");

router.get("/login", AuthorizationController.login);
router.get("/callback", AuthorizationController.callback);

module.exports = router;