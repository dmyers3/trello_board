var fs = require("fs");
var path = require("path");
var Board = require(path.resolve(path.dirname(__dirname), "local_modules/board_node"));

module.exports = function(router) {
  // * Edit board
  router.put('/board', function(req, res, next) {
    Board.update(req.body);
    res.json({});
  });
}

