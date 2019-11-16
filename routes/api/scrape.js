const router = require("express").Router();
const db = require("../../models/Article");
const cheerio = require('cheerio')
const axios = require("axios");


router.route("/").get(function(req, res) {
    // First, we grab the body of the html with axios
    axios.get("https://old.reddit.com/r/environment/").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      
      var $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("a.title").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
        //   .children("a")
          .text();
        result.link = $(this)
        //   .children("a")
          .attr("href");
          
        // Create a new Article using the `result` object built from scraping
        db.create(result)
          .then(function(dbArticle) {
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