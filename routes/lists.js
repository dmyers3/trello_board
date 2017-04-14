var fs = require("fs");
var path = require("path");
var Lists = require(path.resolve(path.dirname(__dirname), "local_modules/lists_node"));

module.exports = function(router) {
  router.post('/lists', function(req, res, next) {
    var list = req.body;
    list.id = Lists.getLastID();
    Lists.set(list);
    res.json(list);
  });
  
  router.put('/board', function(req, res, next) {
    Board.update(req.body);
    res.json({});
  });
}
