const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const loadUser = require("../middleware/loadUser");

// require user - middleware - let's load the user before we proceed
// router.use([loadUser]);

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
// post route handled by loaduser.js - SEE NOTE BELOW
router.put('/:id', usersController.putUserById);
router.delete('/:id', usersController.deleteUserById);

module.exports = router;

/*
Note: our POST route is actually handled usin the loadUser.js
middleware, where we have a function called "find or create user" - 
that way, when a user is created, it is "synced" with Auth0 as
well as our DB. If we allow a separate POST route for users,
then that user would never be authenticated because the ID
would not match Google's ID. 

Per Brother Dransfield:
Creating the user as part of the authentication process
can take the place of a POST for users.
*/