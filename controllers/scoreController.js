const db = require("../models/account");

module.export ={
    findUser: function(req, res) {
        
          db.findOne({username: req.params.username})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
      }
};