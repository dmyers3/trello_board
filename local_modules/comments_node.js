var path = require('path');
var fs = require('fs');
var _ = require('underscore');

// returns string that reprensents content of the file
// path normalizes file path so you don't need to be aware of relative location
var filePath = path.resolve(path.dirname(__dirname), "data/comments.json");

var Comments = {
  get: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).data;
  },
  set: function(comment) {
    var commentsData = JSON.parse(fs.readFileSync(filePath, "utf8"))
    commentsData.last_id += 1;
    commentsData.data.push(comment);
    fs.writeFileSync(filePath, JSON.stringify(commentsData), "utf8");
  },
  update: function(commentData) {
    var id = commentData.id;
    var comment = _(Comments.get()).findWhere( {id: id});
    album.title = albumData.title;
    album.artist = albumData.artist;
    album.date = albumData.date;
    album.price = albumData.price;
    album.cover = albumData.cover;
    fs.writeFileSync(filePath, JSON.stringify(albumsData), "utf8");
  },
  delete: function(id) {
    var idx = parseInt(id);
    var commentsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var comments = _(Comments.get()).reject({"id": idx});
    commentsData.data = comments;
    fs.writeFileSync(filePath, JSON.stringify(commentsData), "utf8");
    
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).last_id;
  },
};

module.exports = Comments;