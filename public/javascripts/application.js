var App = {
  init: function() {
    this.board = new Board({
      "title": "Board",
      "lists": new Lists,
    });
  }
};

App.init();