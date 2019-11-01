const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register").post(usersController.register);

router.route("/login")
.post(passport.authenticate('local', { failureRedirect: '/login' }),            usersController.login);

router.route("/logout")
  .get(usersController.logout);

//this will be the route to grab the score when users login to show their level
router.route("/score")
  .get(usersController.getScore);
//this will be the route to update the users score when they press a button.
router.route("/update")
  .get(usersController.updateScore)

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;