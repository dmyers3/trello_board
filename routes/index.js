var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), "local_modules/board_node"));
var Lists = require(path.resolve(path.dirname(__dirname), "local_modules/lists_node"));
var Cards = require(path.resolve(path.dirname(__dirname), "local_modules/cards_node"));
var Comments = require(path.resolve(path.dirname(__dirname), "local_modules/comments_node"));




module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { 
      board: Board.get(),
      lists: Lists.get(),
      cards: Cards.get(),
      comments: Comments.get(),
    });
  });
};
