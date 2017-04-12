var List = Backbone.Model.extend({
  setCards: function(cards) {
    this.set('cards', cards.where({ listId: this.id}))
  }
});