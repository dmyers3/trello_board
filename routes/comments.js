var fs = require("fs");
var path = require("path");
var Comments = require(path.resolve(path.dirname(__dirname), "local_modules/comments_node"));

module.exports = function(router) {
  router.post('/comments', function(req, res, next) {
    var comment = req.body;
    comment.id = Comments.getLastID();
    Comments.set(comment);
    res.json(comment);
  });
  
  router.put('/comments/:id', function(req, res, next) {
    Comments.update(req.body);
    res.json({});
  });
  
  // * Delete comment
  router.delete('/comments/:id', function(req, res, next) {
    var id = req.params.id;
    Comments.delete(id);
    res.status(200).end();
  });
  
}