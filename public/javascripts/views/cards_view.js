CardsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('');
    this.collection.each(this.renderCard, this);
  },
  renderCard: function(card) {
    this.$el.append(new CardView({
      model: card,
      tagName: 'li',
      attributes: {
        'data-id': card.get('id')
      }
    }).el);
  }
});
