var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click a': 'changeTitle'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  changeTitle: function(e) {
    e.preventDefault();
    this.model.set('title', "Changed Title");
  },
  initialize: function() {
    this.render();
    
    this.model.setCards(App.cards);
    
    new CardsView({
      el: this.$('ul'),
      collection: this.model.get('cards'),
    });
    
    
    this.listenTo(this.model, 'change', this.render);
  }
});