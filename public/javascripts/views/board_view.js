var BoardView = Backbone.View.extend({
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template({
      title: this.model.get('title'),
    }));
  },
  initialize: function() {
    this.render();
    
    new ListsView({
      el: this.$('ul'),
      collection: this.model.get('lists'),
    });
  }
});