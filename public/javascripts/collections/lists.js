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
    
    // I thought 503 Server Error might have been from trying to save next model 
    // while current model was still being saved, so I did below to only start saving
    // next model after current model was successful.
    
  //   listIds = this.pluck('id').sort();
  //   var self = this;
  //   this.saveAll(this.get(listIds[0]));
  // },
  // saveAll: function(currentList) {
  //   console.log(currentList);
  //   var self = this;
  //   var currentIdIndex = listIds.indexOf(currentList.get('id'));
  //   var nextIdIndex = currentIdIndex + 1;
  //   currentList.save(null, {success: function() {
  //     console.log('success');
  //     if (listIds[nextIdIndex]) {
  //       self.saveAll(self.get(listIds[nextIdIndex]));
  //     }
  //   }});
  }
});