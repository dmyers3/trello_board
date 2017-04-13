var express = require("express");
var router = express.Router();
var path = require("path");
var route_files = ["index", "board"];

for (var i = 0; i < route_files.length; i +=1 ) {
  require(path.resolve(path.dirname(__dirname), "routes/" + route_files[i]))(router);
}

module.exports = router