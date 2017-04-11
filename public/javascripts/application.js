var App = {
  templates: JST,
  initializeBoard: function() {
    this.board = new Board({
      "title": "Board",
      "lists": new Lists(),
    });
    this.boardView = new BoardView({ model: this.board });
  },
  init: function() {
    this.initializeBoard();
  }
};

Handlebars.registerPartial('list', App.templates.list);
