var Board = Backbone.Model.extend({
  url: "/board",
  setLists: function(lists) {
    this.set('lists', new Lists(lists.where({ boardId: this.id })));
  },
  setLabels: function() {
    this.set('labels', new Labels(this.get('labels')));
  },
});

