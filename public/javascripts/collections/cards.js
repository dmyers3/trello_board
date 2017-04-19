var Cards = Backbone.Collection.extend({
  url: "/cards",
  comparator: "listPosition",
  model: Card,
  numInList: function(listId) {
    return this.where({listId: listId}).length;
  }
});