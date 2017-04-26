LabelsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    'click h2 .x_close': "closePopup",
    "click .remove_edit .x_close": "hideEditLabel",
    "click .label": "toggleLabel",
    "click span.edit": "showEditLabel",
    "submit .label_title": "changeLabelTitle"
  },
  className: 'labels_popup',
  template: App.templates.labels,
  showEditLabel: function(e) {
    e.preventDefault();
    $(e.target).closest('li').find('.info').hide();
    $(e.target).closest('li').find('.edit').hide();
    $(e.target).closest('li').find('form').css('display', 'inline-block').find('input').focus();
    $(e.target).closest('li').find('.remove_edit').css('display', 'inline-block');
  },
  hideEditLabel: function(e) {
    e.preventDefault();
    $(e.target).closest('li').find('.info').show();
    $(e.target).closest('li').find('.edit').show();
    $(e.target).closest('li').find('form').hide();
    $(e.target).closest('li').find('.remove_edit').hide();
  },
  closePopup: function(e) {
    e.preventDefault();
    this.remove();
  },
  changeLabelTitle: function(e) {
    e.preventDefault();
    var title = $(e.target).find('input').val();
    var labelId = parseInt($(e.target).closest('li').attr('data-id'));
    var label = App.board.get('labels').get({id: labelId});
    label.set('title', title);
    App.board.save();
    this.hideEditLabel(e);
    this.closePopup(e);
    this.render();
    this.delegateEvents();
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