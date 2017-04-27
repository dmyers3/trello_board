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


// Move Card

// Remove Card's CardView from current location and insert it in new location
//   have CardView listen for MoveCard trigger associated with card's Id
//   this.remove
//   find ListId of targetList using Data-Id attribute
//   insert into correct position using similar logic to copyCard functino in listView
//   redelegate Events

// reorder lists for source List and Target List