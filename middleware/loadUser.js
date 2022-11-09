const appConfig = require("../config/db.config");
const User = require("../models/user");

const loadUser = async (req, res, next) => {  
  try {
    // get user info from Auth0
    const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);
    // retrieve user info from DB or add user if not in DB
    const user = await findOrCreateUser(authZeroUser);
    // store user info
    req.user = user;
    // if authenticated, move on
    next();
  } catch (error) {
    // otherwise, send message denying access
    res.status(401).send({ message: "Unauthorized Access. Access token required." })
  }  
};

// helper function: GET request - user info - need to pass in access token into header
const fetchAuthZeroUser = async (authorizationValue) => {
  const response = await fetch(`${appConfig.authorizationHost}/userinfo`, {
    headers: { Authorization: authorizationValue },
  });

  return response.json();
};

// helper function: find user if exists, then return, otherwise create user
const findOrCreateUser = async (authZeroUserJson) => {
  // if null or undefined, just return and do nothing
  if (!authZeroUserJson) return;

  // look up the user based on the identifier, if it exists, return it
  try {
    const existingUser = await User.findOne({
      identifier: authZeroUserJson.sub,
    });
    if (existingUser) return existingUser;
  } catch (error) {
    console.log(error.message);
  }

  // otherwise, user does not exist, let's create and return the new user
  try {
    const newUser = await User.create({
      identifier: authZeroUserJson.sub,
      email: authZeroUserJson.email,
      givenName: authZeroUserJson.given_name,
      familyName: authZeroUserJson.family_name,
      locale: authZeroUserJson.locale,
      picture: authZeroUserJson.picture,
    });
    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loadUser;
