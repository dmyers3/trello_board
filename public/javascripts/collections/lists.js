var Lists = Backbone.Collection.extend({
  url: "/lists",
  model: List,
  setAllCards: function(cards) {
    this.each(function(list) {
      list.setCards(cards);
    });
  }
});