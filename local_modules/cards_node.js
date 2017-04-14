var path = require('path');
var fs = require('fs');
var _ = require('underscore');

// returns string that reprensents content of the file
// path normalizes file path so you don't need to be aware of relative location
var filePath = path.resolve(path.dirname(__dirname), "data/cards.json");

var Cards = {
  get: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).data;
  },
  set: function(card) {
    var cardsData = JSON.parse(fs.readFileSync(filePath, "utf8"))
    cardsData.last_id += 1;
    cardsData.data.push(card);
    fs.writeFileSync(filePath, JSON.stringify(cardsData), "utf8");
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

module.exports = Cards;