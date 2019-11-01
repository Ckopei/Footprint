const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require("./score")

//User Routes
router.use("/users", userRoutes);
router.use("/score", scoreRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
