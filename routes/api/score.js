const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/scoreController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);



/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;