var BoardView = Backbone.View.extend({
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template({
      title: this.model.get('title'),
    }));
  },
  events: {
    "submit .rename_board": "renameBoard"
  },
  renameBoard: function(e) {
    e.preventDefault();
    this.model.set('title', $('.rename_board input').val());
    console.log(this.model.toJSON());
  },
  initialize: function() {
    this.render();
    
    new ListsView({
      el: this.$('ul'),
      collection: this.model.get('lists'),
    });
  }
});