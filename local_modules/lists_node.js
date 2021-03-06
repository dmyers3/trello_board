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
  update: function(listData) {
    var id = listData.id;
    var listsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var lists = listsData.data;
    var list = _(lists).findWhere( {id: id});
    for (var key in listData) {
      if (listData[key] === '' || key === 'cards') {
        delete list[key]
      } else {
        list[key] = listData[key];
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(listsData), "utf8");
    return list;
  },
  delete: function(id) {
    var idx = parseInt(id);
    var listsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    var lists = _(Lists.get()).reject( {id: idx});
    listsData.data = lists;
    fs.writeFileSync(filePath, JSON.stringify(listsData), "utf8");
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8")).last_id;
  },
};

module.exports = Lists;