var Cards = Backbone.Collection.extend({
  url: "/cards",
  comparator: "position",
  model: Card,
  numInList: function(listId) {
    return this.where({listId: listId}).length;
  },
  search: function(letters) {
    if(letters === "") return new Cards();
    var pattern = new RegExp(letters,"gi");
    var matches = this.filter(function(data) {
      
      if (data.get('description')) {
        return (data.get("title").match(pattern) || data.get("description").match(pattern));
      } else {
        return data.get("title").match(pattern);
      }
    });
    return new Cards(matches);
  }
});