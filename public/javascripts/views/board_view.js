var BoardView = Backbone.View.extend({
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template({
      title: this.model.get('title'),
    }));
  },
  events: {
    "submit .rename_board": "renameBoard",
    "click h1 .title": "toggleTitlePopup",
    "click .add_list.container": "toggleAddListDisplay"
  },
  renameBoard: function(e) {
    e.preventDefault();
    var newTitle = $('.rename_board input').val();
    if (newTitle.length > 0) {
      this.model.set('title', newTitle);
      this.model.save({title: this.model.get('title')});
      $('span.title').html(newTitle);
    } else {
      alert('Title must be at least one character');
    }
    // Can refactor following with hideTitlePopup function
    $('.title_popup').hide();
    $(document).off('click');
  },
  toggleAddListDisplay: function(e) {
    e.preventDefault();
    if ($('.add_list.display').is(":visible")) {
      $('.add_list.display').hide();
      $('.add_list.action').slideDown(100);
      e.stopPropagation();
      $(document).on('click', this.hideAddListPopup.bind(this));
      $('.add_list button').on('click', this.addList.bind(this));
    } 
  },
  addList: function(e) {
    e.preventDefault();
    var title = $('.add_list.action input').val();
    if (title.length > 0) {
      var prevNumOfLists = $('#lists > li').length;
      var newList = new List({title: title, boardId: this.model.get('id'), position: prevNumOfLists});
      // Adds newList to Board's List Collection:
      var self = this;
      newList = this.model.get('lists').create(newList, {
        success: function() {
          self.listsView.renderList(newList);
        }
      });
      $('.add_list.action input').val('');
    }
  },
  hideAddListPopup: function(e) {
    if (!e.target.closest('.add_list.container')) {
      $('.add_list.action').hide();
      $('.add_list.display').slideDown(100);
      $(document).off('click');
      $('.add_list button').off('click');
    }
  },
  toggleTitlePopup: function(e) {
    $('.title_popup').toggle();
    $('.title_popup input').attr('value', this.model.get('title'));
    e.stopPropagation();
    $(document).on('click', this.hideTitlePopup);
  },
  hideTitlePopup: function(e) {
    if (!e.target.closest('.title_popup')) {
      $('.title_popup').hide();
      $(document).off('click');
    }
    
  },
  initialize: function() {
    this.render();
    
    this.listsView = new ListsView({
      el: this.$('ul'),
      collection: this.model.get('lists'),
    });
  }
});