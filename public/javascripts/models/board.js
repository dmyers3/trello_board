var Board = Backbone.Model.extend({
  defaults: {
    labels: [{"color": 'green', "id": 0}, {"color": 'yellow', "id": 1}, {"color": 'orange', "id": 2}, {"color": 'red', "id": 3}, {"color": 'purple', "id": 4}, {"color": 'blue', "id": 5}]
  },
  url: "/board",
  setLists: function(lists) {
    this.set('lists', new Lists(lists.where({ boardId: this.id })));
  },
  setLabels: function() {
    this.set('labels', new Labels(this.get('labels')));
  }
});