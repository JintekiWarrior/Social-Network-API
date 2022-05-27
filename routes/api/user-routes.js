const router = require("express").Router();

const {
  indexUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controllers");

// api/users
router.route("/").get(indexUsers).post(createUser);

// api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
