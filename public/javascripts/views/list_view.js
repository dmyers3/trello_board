var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add_card.display': 'toggleAddCardDisplay',
    "click h2.list_title": "displayChangeTitleForm",
    "click .add_card .x_close": "closeAddCard",
    "submit .list_title": "changeTitle"
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
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
    $(document).on('click', this.hideChangeTitleForm.bind(this));
  },
  hideChangeTitleForm: function(e) {
    e.preventDefault();
    if (!e.target.closest('.list_title')) {
      this.$('h2.list_title').show().html(this.model.get('title'));
      this.$('form.list_title').hide();
      $(document).off('click', this.hideChangeTitleForm);
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
      var newCard = new Card({title: title, listId: this.model.get('id')});
      // Adds newCard to Lists's Card Collection:
      this.model.get('cards').create(newCard);
      // console.log(this.model.get('cards'));
      this.$('.add_card.action textarea').val('');
      
      this.cardsView.renderCard(newCard);
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
    var position = copyArray.filter(function(object) {
      return object.name === 'position';
    })[0].value;
    
    var newCard = new Card({title: title, listId: this.model.get('id')});
    this.model.get('cards').create(newCard);
    
    
    this.cardsView.renderCard(newCard);
  },
  initialize: function() {
    this.render();
  
    this.model.setCards(App.cards);
    
    this.cardsView = new CardsView({
      el: this.$('ul'),
      collection: this.model.get('cards'),
    });
    
    this.listenTo(App, 'copy' + this.model.get('id'), this.copyCard);
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(App.board.get('lists'), 'reorderLists', this.editListPositions);
  }
});