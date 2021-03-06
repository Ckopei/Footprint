const router = require("express").Router();
const db = require("../../models/Article");
const cheerio = require('cheerio')
const axios = require("axios");


router.route("/").get(function (req, res) {
  db.remove({}, function (err) {
    console.log('collection removed')
  })
  // First, we grab the body of the html with axios
  axios.get("https://old.reddit.com/r/environment/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector

    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("a.title").each(function (i, element) {
      // Save an empty result object
      var result = {};
      //Reddit uses relative links for self posts, so do nothing if it reaches one.
      if ($(this).attr("href").includes("/r/environment/")) {
        return;
      } else {
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .text();
        result.link = $(this)
          .attr("href");

        // Create a new Article using the `result` object built from scraping
        db.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, log it
            console.log(err);
          });
      }

    });

    // Send a message to the client
    res.send("Scrape Complete");
  });
});

router.route("/articles").get(function (req, res) {
  //empty object so it will pull every one. Reddit caps their pages to roughly 30 links, so we shouldnt ever have more in our collection.
  db.find({}, (err, docs) => {
    if (err) throw err;
    res.json(docs);
  })
});

module.exports = router;