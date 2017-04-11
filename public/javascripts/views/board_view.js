var BoardView = Backbone.View.extend({
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template({
      lists: this.model.get('lists').toJSON(),
      title: this.model.get('title'),
    }));
    $('.tester').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});