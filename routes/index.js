var express = require('express');
var router = express.Router();

var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), "local_modules/board_node"));
var Lists = require(path.resolve(path.dirname(__dirname), "local_modules/lists_node"));
var Cards = require(path.resolve(path.dirname(__dirname), "local_modules/cards_node"));
var Comments = require(path.resolve(path.dirname(__dirname), "local_modules/comments_node"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    board: Board.get(),
    lists: Lists.get(),
    cards: Cards.get(),
    comments: Comments.get(),
  });
});

module.exports = router;
