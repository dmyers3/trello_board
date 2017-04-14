var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add_card.display': 'toggleAddCardDisplay'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  changeTitle: function(e) {
    e.preventDefault();
    this.model.set('title', "Changed Title");
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
      this.$('.add_card.action').hide();
      this.$('.add_card.display').slideDown(100);
      $(document).off('click');
      this.$('.add_card button').off('click');
    }
  },
  addCard: function(e) {
    e.preventDefault();
    var title = this.$('.add_card.action textarea').val();
    if (title.length > 0) {
      var newCard = new Card({title: title, listId: this.model.get('id')});
      // Adds newList to Board's List Collection:
      this.model.get('cards').create(newCard);
      this.$('.add_card.action textarea').val('');
      
      this.cardsView.renderCard(newCard);
    }
  },
  initialize: function() {
    this.render();
    
    this.model.setCards(App.cards);
    
    this.cardsView = new CardsView({
      el: this.$('ul'),
      collection: this.model.get('cards'),
    });
    
    
    this.listenTo(this.model, 'change', this.render);
  }
});