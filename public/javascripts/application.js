var App = {
  templates: JST,
  initializeBoard: function() {
    this.board.setLists(this.lists);
    // this.putCardsinLists();
    this.boardView = new BoardView({ model: this.board, el: 'main' });
  },
  putCardsinLists: function() {
    this.board.get('lists').setAllCards(this.cards);
  },
  init: function() {
    this.initializeBoard();
  }
};

Handlebars.registerPartial('list', App.templates.list);
Handlebars.registerPartial('card', App.templates.card);

