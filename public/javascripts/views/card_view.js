var CardView = Backbone.View.extend({
  className: 'card',
  template: App.templates.card,
  events: {
    'click': 'modalPopup'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  modalPopup: function(e) {
    e.preventDefault();
    new CardModal({model: this.model})
    var cardTitle = this.model.get('title');
    var cardId = this.model.get('id');
    cardTitle = cardTitle.split(' ').map(function(word) {
      return word.toLowerCase();
    }).join('-');
    
    router.navigate(cardId + '-' + cardTitle);
    
  },
  initialize: function() {
    this.render();
    
    this.model.setComments(App.comments);
    
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }
});