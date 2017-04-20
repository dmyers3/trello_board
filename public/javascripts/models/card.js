var Card = Backbone.Model.extend({
  setComments: function(comments) {
    this.set('comments', new Comments(comments.where({ cardId: this.id})))
  },
});