const router = require("express").Router();
const db = require("../../models/account");

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
    db.findOneAndUpdate({username: req.body.username}, {$set:{score:newScore}}, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    });

  })




module.exports = router;