const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const loadUser = require("../middleware/loadUser");

// require user - middleware - let's load the user before we proceed
// router.use([loadUser]); -- add this when we want to hook up auth0

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
//router.post('/', usersController.postUser); // SEE NOTE BELOW
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

Technically, I wouldn't want to delete a user in our DB
without also being able to delete the user at Auth0, but 
I think for this project it's probably fine to leave it that way.
That way, if you really wanted to delete the user, you would go 
to Auth0 to delete the user and then send the DELETE route 
to delete the user from MongoDB.

Other than that, PUT would only modify the array of character IDs
for the user, and any other additional fields we may want to add.

For that reason, the POST route is tentatively commented out.
*/