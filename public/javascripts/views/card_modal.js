var CardModalView = Backbone.View.extend({
  className: 'modal_container',
  template: App.templates.card_modal,
  events: {
    "click h2.title": "showEditTitle",
    "click .close": "removeModal",
    "click a.edit": "showEditDescription",
    "click a.due_date": "showEditDueDate",
    "click a.labels": "showEditLabels",
    "click .x_close.description": "hideEditDescription",
    "click .actions .archive": "deleteCard",
    "click .actions .copy": "copyCard",
    "click .actions .subscribe": "toggleSubscribed",
    "submit form.change_card_title": "editCardTitle",
    "submit form.edit_description": "editDescription",
    "submit form.change_due_date": "editDueDate",
    "submit form.submit_comment": "submitComment",
    "reset form.change_due_date": "removeDueDate",
  },
  showEditTitle: function(e) {
    e.preventDefault();
    this.$('h2.title').hide();
    this.$('.change_card_title').show()
    this.$('.change_card_title input').focus();
    this.$('.card_modal').on('click', this.hideChangeTitle.bind(this));
  },
  hideChangeTitle: function(e) {
    e.preventDefault();
    if (!e.target.closest('.change_card_title')) {
      this.$('.change_card_title').hide();
      this.$('h2.title').show();
      this.$('.card_modal').off('click');
    }
  },
  editCardTitle: function(e) {
    e.preventDefault();
    var title = this.$('.change_card_title input').val();
    this.model.set('title', title);
    this.model.save();
    this.$('.change_card_title').hide();
    this.$('h2.title').show().html(title);
  },
  submitComment: function(e) {
    e.preventDefault();
    var date = new Date();
    var newComment = new Comment({cardId: this.model.get('id'), content: $('.submit_comment textarea').val(), date: date});
    this.model.get('comments').create(newComment);
    new CommentView({model: newComment, tagName: 'li'});
    $('.submit_comment textarea').val('');
  },
  toggleSubscribed: function(e) {
    e.preventDefault();
    var subscribed;
    if (this.model.get('subscribed')) {
      subscribed = '';
    } else {
      subscribed = true;
    }
    this.model.set('subscribed', subscribed);
    this.model.save({subscribed: subscribed});
    $('.actions .subscribe').toggleClass('true');
  },
  deleteCard: function(e) {
    e.preventDefault();
    var confirm = window.confirm('Are you sure? This cannot be undone.');
    if (confirm === true) {
      this.model.destroy();
    }
    this.removeModal(e);
  },
  copyCard: function(e) {
    e.preventDefault();
    new CopyView({model: this.model, className: 'copyContainer'})
  },
  showEditDescription: function(e) {
    e.preventDefault();
    this.$('a.edit').hide();
    this.$('.edit_description.action').show();
    var description = this.$('.edit_description.display .description').html();
    this.$('.edit_description.display .description').hide();
    this.$('.edit_description.action textarea').html(description);
  },
  hideEditDescription: function(e) {
    e.preventDefault();
    this.$('a.edit').show();
    this.$('.edit_description.action').hide();
    this.$('.edit_description.display .description').show();
  },
  showEditDueDate: function(e) {
    e.preventDefault();
    this.$('.date_popup').show();
    $('#date_picker').datepicker();
    $('#time_picker').timepicker();
  },
  showEditLabels: function(e) {
    e.preventDefault();
    new LabelsView({model: this.model});
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
    
    this.commentsView = new CommentsView({
      el: this.$('ul#comments'),
      collection: this.model.get('comments'),
    });
  },
  render: function() {
    $('body').append(this.$el.html(this.template(this.model.toJSON())));
  }
});