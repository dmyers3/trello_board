var Board = Backbone.Model.extend({
  setLists: function(lists) {
    this.set('lists', new Lists(lists.where({ boardId: this.id })))
  }
});