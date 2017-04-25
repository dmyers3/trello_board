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
    new CardModalView({model: this.model});
    var cardTitle = this.model.get('title');
    var cardId = this.model.get('id');
    cardTitle = cardTitle.split(' ').map(function(word) {
      return word.toLowerCase();
    }).join('-');
    
    router.navigate(cardId + '-' + cardTitle);
    
  },
  initialize: function() {
    this.model.setComments(App.comments);
    this.render();
    
    this.listenTo(this.model, 'change sync', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'modalPopup', this.modalPopup);
  }
});