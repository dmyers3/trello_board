var CopyView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.delegateEvents();
  },
  events: {
    "click .x_close": "removeView",
    "click .copy_btn": "copyCard",
    "change select.lists": "populatePositionsOnChange"
  },
  template: App.templates.copy,
  populatePositions: function() {
    var positions = [];
    for (var i = 0; i <= this.cardsCount(this.model.get('listId')); i += 1) {
      positions.push(i);
    }
    return positions;
  },
  populatePositionsOnChange: function(e) {
    // When select dropdown changes repopulate positions dropdown based on how many cards in that list
    e.preventDefault();
    var listId = parseInt($(e.target).val());
    var listModel = App.lists.findWhere({id: listId});
    var listModelNumCards = listModel.get('cards').length;
    $('select.positions').html('');
    for (var i = 0; i <= listModelNumCards; i += 1) {
      $('select.positions').append("<option value=" + i +">" + i + "</option>");
    }
    
  },
  copyCard: function(e) {
    e.preventDefault();
    var $f = this.$('form');
    App.copyCard($f.serializeArray());
    this.removeView(e);
  },
  removeView: function(e) {
    e.preventDefault();
    this.remove();
  },
  cardsCount: function(listId) {
    return this.model.collection.numInList(this.model.get('listId'));
  },
  render: function() {
    this.remove();
    $('.card_modal aside').append(this.$el.html(this.template({title: this.model.get('title'), board: App.board.toJSON(), lists: App.board.get('lists').toJSON(), positions: this.populatePositions()})));
    var listId = this.model.get('listId');
    $('select.lists option[value=' + listId + ']').prop('selected', true);
  }
});