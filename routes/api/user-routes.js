const router = require("express").Router();

const {
  indexUsers,
  createUser,
} = require("../../controllers/user-controllers");

// api/users
router.route("/").get(indexUsers).post(createUser);

module.exports = router;
