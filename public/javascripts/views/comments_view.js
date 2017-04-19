CommentsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('');
    this.collection.each(this.renderComment, this);
  },
  renderComment: function(comment) {
    this.$el.append(new CommentView({
      model: comment,
      tagName: 'li'
    }).el);
  }
});