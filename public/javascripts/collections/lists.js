var Lists = Backbone.Collection.extend({
  model: List,
  setAllCards: function(cards) {
    this.each(function(list) {
      list.setCards(cards);
    });
  }
});