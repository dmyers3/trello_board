var App = {
  templates: JST,
  initializeBoard: function() {
    this.board.setLists(this.lists);
    this.boardView = new BoardView({ model: this.board, el: 'main' });
  },
  init: function() {
    this.initializeBoard();
  }
};

Handlebars.registerPartial('list', App.templates.list);
Handlebars.registerPartial('card', App.templates.card);

