var List = Backbone.Model.extend({
  setCards: function(cards) {
    this.set('cards', new Cards(cards.where({ listId: this.id})));
  },
  delete: function() {
    this.get('cards').each(function(card) {
      card.delete();
    });
    this.destroy();
  }
});