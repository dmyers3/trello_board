// don't need Router Constructor so use IIFE
var router = new (Backbone.Router.extend({
  routes: {
    ":cardString": "createCardModal"
  },
  createCardModal: function(cardString) {
    var cardData = cardString.split('-');
    var cardId = parseInt(cardData[0]);
    var cardModel = App.cards.findWhere({id: cardId});
    new CardModalView({model: cardModel});
  },
  index: function() { 
    if (App.boardView) {
      App.trigger('removeModal');
    }
    // router.navigate(App.board.get('title'));
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true});
});