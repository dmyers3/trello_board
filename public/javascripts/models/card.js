var Card = Backbone.Model.extend({
  setComments: function(comments) {
    this.set('comments', new Comments(comments.where({ cardId: this.id})))
  },
  delete: function() {
    this.get('comments').each(function(comment) {
      comment.destroy();
    });
    this.destroy();
  }
});