const router = require("express").Router();
const db = require("../../models/Article");
const cheerio = require('cheerio')
const axios = require("axios");


router.route("/").get(function(req, res) {
    console.log("backend test")
    // First, we grab the body of the html with axios
    axios.get("https://www.huffpost.com/impact/green").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      console.log("backend test")
      var $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("article h2").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
          
        // Create a new Article using the `result` object built from scraping
        db.create(result)
          .then(function(dbArticle) {
            console.log("backend test")
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
  
      // Send a message to the client
      res.send("Scrape Complete");
    });
  });

  router.route("/articles").get(function(req, res) {
    // TODO: Finish the route so it grabs all of the articles
    db.find({}, (err, docs) =>{
      if (err) throw err;
      res.json(docs);
    })
  });

module.exports = router;