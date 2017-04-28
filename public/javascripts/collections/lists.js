var Lists = Backbone.Collection.extend({
  url: "/lists",
  comparator: "position",
  model: List,
  setAllCards: function(cards) {
    this.each(function(list) {
      list.setCards(cards);
    });
  },
  reorderDataIds: function() {
    var $lists = $('#lists > li');
    var self = this;
    $lists.each(function(index, list) {
      var id = list.getAttribute('data-id');
      var matchingList = self.get(id);
      matchingList.set('position', index);
      matchingList.save({'position': matchingList.get('position')});
    });
    
    self.sort();
  }
});