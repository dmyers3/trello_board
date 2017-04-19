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
  },
  initialize: function() {
    this.render();
    
    this.model.setComments(App.comments);
    
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }
});