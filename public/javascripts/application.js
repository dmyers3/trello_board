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
  setupSearch: function() {
    $('header input').on('focus', this.createSearchView.bind(this));
  },
  createSearchView: function() {
    if (this.searchView) {
      this.searchView.render();
    } else {
      this.searchView = new searchView({collection: this.cards, className: 'search_container'});
    }
  },
  copyCard: function(copyArray) {
    var listId = copyArray.filter(function(object) {
      return object.name === 'list';
    })[0].value;
    console.log(this);
    this.trigger('copy' + listId, copyArray);
  },
  turnOffDocumentListener: function() {
    if (this.openPopups === 0) {
      $(document).off('click');
    }
  },
  setupPopupCount: function() {
    this.openPopups = 0;
  },
  navigateHome: function() {
    router.navigate('');
  },
  setupNotifications: function() {
    this.notifications = new Notifications();
    $('header .notifications').on('click', this.createNotificationView.bind(this));
  },
  createNotificationView: function() {
    if (this.notificationsView) {
      this.notificationsView.render();
    } else {
      this.notificationsView = new NotificationsView({collection: this.notifications, className: 'notification_container'});
    }
  },
  init: function() {
    this.initializeBoard();
    this.setupSearch();
    this.setupDragAndDrop();
    this.listenForDropEvents();
    this.setupPopupCount();
    this.setupNotifications();
  }
};

Handlebars.registerHelper('listTitle', function(listId) {
  var matchingList = App.lists.findWhere({id: listId});
  return matchingList.get('title');
});

// Not really needed with just one board, but can be modified to find board based on listId of specific Card
Handlebars.registerHelper('boardTitle', function(listId) {
  var matchingList = App.lists.findWhere({id: listId});
  return App.board.get('title');
});

