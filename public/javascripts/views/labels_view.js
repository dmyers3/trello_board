LabelsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    'click .x_close': "closePopup",
    "click .label": "toggleLabel"
  },
  className: 'labels_popup',
  template: App.templates.labels,
  closePopup: function(e) {
    e.preventDefault();
    this.remove();
  },
  toggleLabel: function(e) {
    e.preventDefault();
    var labelId = parseInt($(e.target).attr('data-id'));
    $(e.target).find('img').toggleClass('selected');
    
    var currentLabelsInModel = this.model.get('labels') || [];
    
    console.log(currentLabelsInModel);
  },
  render: function() {
    $('.card_modal aside').append(this.$el.html(this.template({ labels: App.board.get('labels').toJSON()})))
  }
});