const express = require("express");
const router = express.Router();

const { getAll, save, update, get} = require("../controllers/recipes");
const { remove } = require("../services/recipes");
router.route("/").get(getAll).post(save);
router.route("/:id").get(get).put(update).delete(remove);

module.exports = router;