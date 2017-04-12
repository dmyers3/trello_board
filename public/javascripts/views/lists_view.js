ListsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('');
    this.collection.each(this.renderList, this);
  },
  renderList: function(list) {
    this.$el.append(new ListView({
      model: list,
      tagName: 'li'
    }).el);
  }
});