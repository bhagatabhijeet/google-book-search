const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findOneAndRemove({ bookid: req.params.id },function (err, docs) { 
        if (err){ 
            console.log(err);
            res.status(422).json(err) 
        } 
        else{ 
            console.log("Removed  : ", docs); 
            res.json(docs)
        } 
      });      

  },
  create: function(req, res) {
    //console.log(req.body); //Retained for debugging
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  }
};
