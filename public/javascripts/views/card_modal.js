var CardModal = Backbone.View.extend({
  className: 'modal_container',
  template: App.templates.card_modal,
  events: {
    "click .close": "removeModal",
    "click a.edit": "showEditDescription",
    "click a.due_date": "showEditDueDate",
    "submit form.edit_description": "editDescription",
    "submit form.change_due_date": "editDueDate",
    "reset form.change_due_date": "removeDueDate",
  },
  showEditDescription: function(e) {
    e.preventDefault();
    this.$('a.edit').hide();
    this.$('.edit_description.action').show();
    var description = this.$('.edit_description.display .description').html();
    this.$('.edit_description.display .description').hide();
    this.$('.edit_description.action textarea').html(description);
  },
  showEditDueDate: function(e) {
    e.preventDefault();
    this.$('.date_popup').show();
    $('#date_picker').datepicker();
    $('#time_picker').timepicker();
  },
  editDueDate: function(e) {
    e.preventDefault();
    var dueDate = this.$('#date_picker').val() + ' ' + this.$('#time_picker').val();
    this.model.set('due_date', dueDate);
    this.model.save();
    this.refresh();
  },
  removeDueDate: function(e) {
    e.preventDefault();
    this.model.set('due_date', '');
    this.model.save();
    this.refresh();
  },
  refresh: function() {
    this.remove();
    new CardModal({model: this.model});
  },
  editDescription: function(e) {
    e.preventDefault();
    var description = this.$('.edit_description.action textarea').val();
    this.model.set('description', description);
    this.model.save();
    this.refresh();
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