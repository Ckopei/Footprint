const router = require("express").Router();
const db = require("../../models/account");
// const scoreController = require("../../controllers/scoreController")

// router.route("/:username")
// .get(scoreController.findUser)
router.route("/:username")
  .get(function(req, res) {
        db.findOne({username: req.params.username})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }
  );



module.exports = router;