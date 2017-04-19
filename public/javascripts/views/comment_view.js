var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  initialize: function() {
    this.render();
  },
  events: {
    "click a.delete": "deleteComment",
    "click a.edit_comment": "editComment",
    "click .x_close": "closeEditPopup"
  },
  deleteComment: function(e) {
    e.preventDefault();
    var confirm = window.confirm('Are you sure? This cannot be undone.');
    if (confirm === true) {
      this.model.destroy();
    }
  },
  closeEditPopup: function() {
    this.$('.comment_container').show();
    this.$('.edit_comment_popup').hide();
  },
  editComment: function(e) {
    e.preventDefault();
    console.log('edit');
    this.$('.comment_container').hide();
    this.$('.edit_comment_popup').show();
    this.$('textarea').val(this.model.get('content'));
  },
  render: function() {
    $('#comments').append(this.$el.html(this.template(this.model.toJSON())));
  }
});