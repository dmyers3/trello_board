var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add_card.display': 'toggleAddCardDisplay',
    "click h2.list_title": "displayChangeTitleForm",
    "click .add_card .x_close": "closeAddCard",
    "click .trash": "deleteList",
    "submit .list_title": "changeTitle"
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  deleteList: function(e) {
    e.preventDefault();
    var confirm = window.confirm('Are you sure? This cannot be undone.');
    if (confirm === true) {
      this.model.delete();
    }
  },
  changeTitle: function(e) {
    e.preventDefault();
    
    var newTitle = this.$('.list_title input').val();
    this.model.set('title', newTitle);
    this.model.save({title: newTitle});
    this.hideChangeTitleForm(e);
  },
  displayChangeTitleForm: function(e) {
    e.preventDefault();
    this.$('h2.list_title').hide();
    this.$('form.list_title').show();
    this.$('.list_title input').val(this.model.get('title')).focus();
    $(document).on('click', this.clickHideChangeTitleForm.bind(this));
  },
  hideChangeTitleForm: function(e) {
    this.$('h2.list_title').show();
    this.$('h2.list_title span.title').html(this.model.get('title'));
    this.$('form.list_title').hide();
    $(document).off('click', this.clickHideChangeTitleForm);
  },
  clickHideChangeTitleForm: function(e) {
    e.preventDefault();
    if (!e.target.closest('.list_title')) {
      this.hideChangeTitleForm(e);
    }
  },
  toggleAddCardDisplay: function(e) {
    e.preventDefault();
    if (this.$('.add_card.display').is(":visible")) {
      this.$('.add_card.display').hide();
      this.$('.add_card.action').slideDown(100);
      e.stopPropagation();
      $(document).on('click', this.hideAddCardPopup.bind(this));
      this.$('.add_card button').on('click', this.addCard.bind(this));
    } 
  },
  hideAddCardPopup: function(e) {
    if (!e.target.closest('.add_card.container')) {
      this.closeAddCard(e);
    }
  },
  closeAddCard: function(e) {
    e.preventDefault();
    this.$('.add_card.action').hide();
    this.$('.add_card.display').slideDown(100);
    $(document).off('click', this.hideAddCardPopup);
    this.$('.add_card button').off('click');
  },
  addCard: function(e) {
    e.preventDefault();
    var title = this.$('.add_card.action textarea').val();
    if (title.length > 0) {
      var prevNumOfCards = this.$('.cards > li').length;
      var newCard = new Card({title: title, listId: this.model.get('id'), position: prevNumOfCards});
      // Adds newCard to Lists's Card Collection:
      App.cards.add(newCard);
      var self = this;
      this.model.get('cards').create(newCard, {
        success: function() {
          self.cardsView.renderCard(newCard);
        }
      });
      this.$('.add_card.action textarea').val('');
      
      
    }
  },
  editListPositions: function() {
    this.model.set('position', parseInt(this.$el.attr('data-position')));
    this.model.save();
  },
  copyCard: function(copyArray) {
    var title = copyArray.filter(function(object) {
      return object.name === 'title';
    })[0].value;
    var position = parseInt(copyArray.filter(function(object) {
      return object.name === 'position';
    })[0].value);
    
    var newCard = new Card({title: title, listId: this.model.get('id'), position: position});
    var arrayOfCards = this.$('.cards > li');
    
    this.model.get('cards').create(newCard, { success: function() {
      if (arrayOfCards.eq(position).length) {
        arrayOfCards.eq(position).before(new CardView({ model: newCard, tagName: 'li', attributes: {'data-id': newCard.get('id')}}).el);
      } else {
        this.cardsView.renderCard(newCard);
      }
    }});
    
    App.cards.add(newCard);
    this.reorderPositions();
    
  },
  moveCard: function() {
    this.reorderPositions();
    this.model.setCards(App.cards);
  },
  reorderPositions: function() {
    var self = this;
     
    this.$('.cards > li').each(function(index, card) {
      var cardId = parseInt(card.getAttribute('data-id'));
      var matchingCard = App.cards.findWhere({id: cardId});
      var listId = parseInt(self.$('.cards').attr('data-list_id'));
      matchingCard.set('listId', listId);
      matchingCard.set('position', index);
      matchingCard.save();
    });
    
    this.model.setCards(App.cards);
    App.cards.sort()
  },
  initialize: function() {
    this.render();
  
    this.model.setCards(App.cards);
    
    this.cardsView = new CardsView({
      el: this.$('ul'),
      collection: this.model.get('cards'),
    });
    
    this.listenTo(App, 'copy' + this.model.get('id'), this.copyCard);
    this.listenTo(App, 'move' + this.model.get('id'), this.moveCard);
    this.listenTo(this.model, 'reorder', this.reorderPositions);
  }
});