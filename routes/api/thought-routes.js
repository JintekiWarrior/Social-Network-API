const router = require("express").Router();

const {
  indexThoughts,
  createThought,
} = require("../../controllers/thought-controllers");

router.route("/:userId").get(indexThoughts).post(createThought);

module.exports = router;
