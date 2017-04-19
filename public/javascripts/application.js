var App = {
  templates: JST,
  initializeBoard: function() {
    this.board.setLists(this.lists);
    this.board.setLabels();
    this.boardView = new BoardView({ model: this.board, el: 'main' });
    _.extend(this, Backbone.Events);
  },
  setupDragAndDrop: function() {
    this.cardsDrake = dragula();
    var numCardContainers = $('.cards').length;
    this.listsDrake = dragula([$('#lists').get(0)], {
      moves: function(el, source, handle, sibling) {
        return (handle.tagName === 'H2');
      },
      direction: 'horizontal'
    });
    for (var i=0; i < numCardContainers; i += 1) {
      this.cardsDrake.containers.push($('.cards').get(i));
    }
  },
  listenForDropEvents: function() {
    var self = this;
    this.listsDrake.on('drop', function(el, target, source, sibling) {
      self.board.get('lists').reorderDataIds();
    });
    
    this.cardsDrake.on('drop', function(el, target, source, sibling) {
      // console.log(el);
      // console.log(target);
      // console.log(source);
      // console.log(sibling);
      _.extend(this, Backbone.Events);
      this.trigger('cardDrop');
      
      // trigger for both target ID and source ID
      // then use specific CardViews to listen for trigger and adjust positions accordingly
    })
  },
  copyCard: function(copyArray) {
    var listId = copyArray.filter(function(object) {
      return object.name === 'list';
    })[0].value;
    console.log(this);
    this.trigger('copy' + listId, copyArray);
  },
  init: function() {
    this.initializeBoard();
    this.setupDragAndDrop();
    this.listenForDropEvents();
  }
};



