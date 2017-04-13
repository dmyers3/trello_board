var CardModal = Backbone.View.extend({
  className: 'modal_container',
  template: App.templates.card_modal,
  events: {
    "click .close": "removeModal"
  },
  removeModal: function(e) {
    e.preventDefault();
    this.remove();
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    $('body').append(this.$el.html(this.template(this.model.toJSON())));
  }
});