var searchView = Backbone.View.extend({
  initialize: function() {
    $('header input').off('keyup');
    this.render();
    $('header input').on('keyup', this.render.bind(this));
  },
  events: {
    "click a": "modalPopup"
  },
  modalPopup: function(e) {
    e.preventDefault();
    var cardId = parseInt($(e.target).attr('data-id'));
    var cardModel = App.cards.findWhere({id: cardId});
    cardModel.trigger('modalPopup', e);
    this.remove();
    this.clearInput();
  },
  clearInput: function() {
    $('header input').val('');
  },
  template: App.templates.search,
  closeSearch: function(e) {
    e.preventDefault();
    if (!(e.target.closest('.search_container') || e.target.closest("input[type='search']"))) {
      this.remove();
      $(document).off('click', this.closeSearch);
    }
  },
  render: function() {
    this.remove();
    $('header').append(this.$el.html(this.template({matchingCards: this.matchingCards().toJSON()})));
    this.delegateEvents();
    $(document).off('click', this.closeSearch);
    $(document).on('click', this.closeSearch.bind(this));
  },
  matchingCards: function() {
    var searchChars = $('header input').val();
    
    var cardMatches = this.collection.search(searchChars);
    return cardMatches;
  }
});