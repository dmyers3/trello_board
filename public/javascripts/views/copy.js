var CopyView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.delegateEvents();
  },
  events: {
    "click .x_close": "removeView",
    "submit .copy": "copyCard"
  },
  template: App.templates.copy,
  populatePositions: function() {
    var positions = [];
    for (var i = 0; i <= this.cardsCount(this.model.get('listId')); i += 1) {
      positions.push(i);
    }
    return positions;
  },
  copyCard: function(e) {
    e.preventDefault();
    var $f = this.$('form');
    App.copyCard($f.serializeArray());
  },
  removeView: function(e) {
    e.preventDefault();
    this.remove();
  },
  cardsCount: function(listId) {
    return this.model.collection.numInList(this.model.get('listId'));
  },
  render: function() {
    this.remove();
    $('.card_modal aside').append(this.$el.html(this.template({title: this.model.get('title'), board: App.board.toJSON(), lists: App.board.get('lists').toJSON(), positions: this.populatePositions()})));
  }
});