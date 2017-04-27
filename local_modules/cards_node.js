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
  update: function(cardData) {
    var id = cardData.id;
    var cardsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var cards = cardsData.data;
    var card = _(cards).findWhere( {id: id});
    for (var key in cardData) {
      if (cardData[key] === '' || key === 'comments') {
        delete card[key]
      } else {
        card[key] = cardData[key];
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(cardsData), "utf8");
  },
  delete: function(id) {
    var idx = parseInt(id);
    var cardsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var cards = _(Cards.get()).reject( {id: idx});
    cardsData.data = cards;
    fs.writeFileSync(filePath, JSON.stringify(cardsData), "utf8");
  },
  updateAll: function(cardsData) {
    var allCardsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    allCardsData.data= cardsData;
    fs.writeFileSync(filePath, JSON.stringify(allCardsData), "utf8");
    
    
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).last_id;
  },
};

module.exports = Cards;