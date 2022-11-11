const { ObjectID } = require("bson");
const User = require("../models/user");

// Get Users
const getUsers = async (req, res) => {
  await Library.find()
    .then((data) => {
      if (!data) res.status(404).send({ message: "No data returned" });
      else res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error retrieving user data from server",
      });
    });
};

// GET User by ID
const getUserById = async (req, res) => {
  const id = req.params.id; // findById casts id as a MongoDB ObjectID

  await User.findById(id)
    .then((data) => {
      console.log(data);
      if (!data)
        res
          .status(404)
          .send({ message: `User not found with id = ${id}` });
      else res.status(200).send(data);
    })
    .catch((err) => {
      console.log(`Error message: ${err.message}`);
      res.status(500).send({
        message: `Error retrieving User with id = ${id}; not a valid MongoDB Object id`,
      });
    });
};

// POST Therapist - NOT NEEDED
// PER Brother Dransfield: creating the user as 
// part of the authentication process can take the place
// of a POST for users.
// const postUser = async (req, res) => {
//   // Create a new user // add character array to user
//   const user = new User({
//     identifier: req.body.sub,
//     email: req.body.email,
//     givenName: req.body.given_name,
//     familyName: req.body.family_name,
//     locale: req.body.locale,
//     picture: req.body.picture,
//   });

//   // save user
//   await user
//     .save(user)
//     .then((data) => {
//       res
//         .status(201)
//         .send(`New user added with the following id: ${data._id}`);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the user.",
//       });
//     });
// };

// PUT User (modify)
const putUserById = async (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const update = req.body;
  const options = { runValidators: true };

  await User.findByIdAndUpdate(id, update, options)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id=${id}. Therapist was not found!`,
        });
      } else
        res
          .status(204)
          .send({ message: "User was updated successfully." });
    })
    .catch((err) => {
      switch (err.name) {
        case "ValidationError":
          res.status(422).send({
            message:
              err.message ||
              `Validation failed; check data entered and try again.`,
          });
          break;
        case "CastError":
          res.status(404).send({
            message: `Error retrieving user with id = ${id}; not a valid Mongo Object id`,
          });
          break;
        default:
          res.status(500).send({
            message:
              err.message ||
              `Error updating user with id=${id}; Unknown server error`,
          });
      }

      console.log(`Error message: ${err.message}`);
      if (err.errors) console.log(`Error: ${err.name}`);
    });
};

// DELETE User
const deleteUserById = async (req, res) => {
  const id = new ObjectID(req.params.id);

  await User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe Therapist was not found!`,
        });
      } else {
        res.status(200).send({
          message: "user was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};

module.exports = {
  getUsers,
  getUserById,
  putUserById,
  deleteUserById,
};
