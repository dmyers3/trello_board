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
  addCheckMarks: function() {
    var currentCardLabels = this.model.get('labels') || [];
    currentCardLabels.forEach(function(labelId) {
      $(".labels_main li[data-id=" + labelId + "] img").addClass('selected');
    });
  },
  toggleLabel: function(e) {
    e.preventDefault();
    var labelId = parseInt($(e.target).closest('li').attr('data-id'));
    $(e.target).find('img').toggleClass('selected');
    
    var currentCardLabels = this.model.get('labels') || [];
    var indexOfClickedLabel = currentCardLabels.indexOf(labelId);
    
    if (indexOfClickedLabel === -1) {
      currentCardLabels.push(labelId);
    } else {
      currentCardLabels.splice(indexOfClickedLabel, 1);
    }
    
    currentCardLabels.sort(function(a,b) {
      return a > b ? 1 : -1;
    });
    this.model.set('labels', currentCardLabels);
    this.model.save();
    
  },
  render: function() {
    $('.card_modal aside').append(this.$el.html(this.template({ labels: App.board.get('labels').toJSON()})))
    this.addCheckMarks();
  }
});