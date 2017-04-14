var path = require('path');
var fs = require('fs');
var _ = require('underscore');

// returns string that reprensents content of the file
// path normalizes file path so you don't need to be aware of relative location
var filePath = path.resolve(path.dirname(__dirname), "data/lists.json");

var Lists = {
  get: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).data;
  },
  set: function(list) {
    var listsData = JSON.parse(fs.readFileSync(filePath, "utf8"))
    listsData.last_id += 1;
    listsData.data.push(list);
    fs.writeFileSync(filePath, JSON.stringify(listsData), "utf8");
  },
  update: function(albumData) {
    var id = albumData.id;
    var album = _(Albums.get()).findWhere( {id: id});
    album.title = albumData.title;
    album.artist = albumData.artist;
    album.date = albumData.date;
    album.price = albumData.price;
    album.cover = albumData.cover;
    fs.writeFileSync(filePath, JSON.stringify(albumsData), "utf8");
  },
  delete: function(albumData) {
    var id = albumData.id;
    var albumsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var albums = _(Albums.get()).reject( {id : id});
    albumsData.data = albums;
    
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).last_id;
  },
};

module.exports = Lists;