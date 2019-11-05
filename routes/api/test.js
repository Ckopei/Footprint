const router = require("express").Router();
const db = require("../../models/account");
// const scoreController = require("../../controllers/scoreController")

// router.route("/:username")
// .get(scoreController.findUser)
router.route("/:username")
  .get(function (req, res) {
    db.findOne({ username: req.params.username })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
  );
router.route("/")
  .put(function (req, res) {
    let newScore = parseInt(req.body.score) + 6
    console.log(req.body)

    let query = { '_id': req.body.id };
    let score = newScore;
    db.findOneAndUpdate(query, score, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    });

  })




module.exports = router;