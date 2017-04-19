var fs = require("fs");
var path = require("path");
var Lists = require(path.resolve(path.dirname(__dirname), "local_modules/lists_node"));
var _ = require('underscore');

module.exports = function(router) {
  router.post('/lists', function(req, res, next) {
    var list = req.body;
    list.id = Lists.getLastID();
    Lists.set(list);
    res.json(list);
  });
  
  router.put('/lists/:id', function(req, res, next) {
    var list = Lists.update(req.body);
    // res.status(200).end();
    res.json(list).end();
  });
  
  router.patch('/lists', function(req, res, next) {
    Lists.updateAll(req.body);
    res.json({});
  });
}
