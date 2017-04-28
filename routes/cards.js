var fs = require("fs");
var path = require("path");
var Cards = require(path.resolve(path.dirname(__dirname), "local_modules/cards_node"));

module.exports = function(router) {
  router.post('/cards', function(req, res, next) {
    var card = req.body;
    card.id = Cards.getLastID();
    Cards.set(card);
    res.json(card);
  });
  
  router.put('/cards/:id', function(req, res, next) {
    Cards.update(req.body);
    res.json({});
  });
  
  router.delete('/cards/:id', function(req, res, next) {
    var id = req.params.id;
    Cards.delete(id);
    res.status(200).end();
  });
  
}