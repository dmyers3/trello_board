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
  
  router.put('/board', function(req, res, next) {
    Board.update(req.body);
    res.json({});
  });
}