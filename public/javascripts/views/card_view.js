var CardView = Backbone.View.extend({
  className: 'card',
  template: App.templates.card,
  events: {
    'click': 'modalPopup'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  move: function(moveArray) {
    var listId = parseInt(moveArray.filter(function(object) {
      return object.name === 'list';
    })[0].value);
    
    var position = parseInt(moveArray.filter(function(object) {
      return object.name === 'position';
    })[0].value);
    
    // Finds the element to insert moved card before. If moving within current list need some extra logic (nested if statement)
    if (this.model.get('listId') === listId) {
      if (this.model.get('position') <= position) {
        var elementToInsertBefore = $('#lists > li[data-id=' + listId + '] .cards > li').get(position + 1);
      } else {
        var elementToInsertBefore = $('#lists > li[data-id=' + listId + '] .cards > li').get(position);
      }
    } else {
      var elementToInsertBefore = $('#lists > li[data-id=' + listId + '] .cards > li').get(position);
    }
    
    if (elementToInsertBefore) {
      this.$el.insertBefore(elementToInsertBefore);
    } else {
      this.$el.appendTo($('#lists > li[data-id=' + listId + '] .cards'));
    }
    
    
  },
  modalPopup: function(e) {
    e.preventDefault();
    new CardModalView({model: this.model});
    var cardTitle = this.model.get('title');
    var cardId = this.model.get('id');
    cardTitle = cardTitle.split(' ').map(function(word) {
      return word.toLowerCase();
    }).join('-');
    
    router.navigate(cardId + '-' + cardTitle);
    
  },
  initialize: function() {
    this.model.setComments(App.comments);
    this.render();
    
    this.listenTo(this.model, 'change sync', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'modalPopup', this.modalPopup);
    this.listenTo(this.model, 'move', this.move);
  }
});