const router = require("express").Router();
const scoreController = require

router.route("/:username")
    .get(scoreController.findUser)