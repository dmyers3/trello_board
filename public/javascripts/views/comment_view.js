var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  initialize: function() {
    this.render();
  },
  events: {
    "click a.delete": "deleteComment",
    "click a.edit_comment": "editCommentPopup",
    "click .x_close": "closeEditPopup",
    "submit .edit_comment": "editComment"
  },
  deleteComment: function(e) {
    e.preventDefault();
    var confirm = window.confirm('Are you sure? This cannot be undone.');
    if (confirm === true) {
      this.model.destroy();
      this.remove();
    }
  },
  closeEditPopup: function() {
    this.$('.comment_container').show();
    this.$('.edit_comment_popup').hide();
  },
  editCommentPopup: function(e) {
    e.preventDefault();
    this.$('.comment_container').hide();
    this.$('.edit_comment_popup').show();
    this.$('textarea').val(this.model.get('content'));
  },
  editComment: function(e) {
    e.preventDefault();
    var newContent = this.$('textarea').val();
    this.model.set('content', newContent);
    this.model.save();
    this.closeEditPopup();
    this.$('p').html(newContent);
  },
  render: function() {
    $('#comments').append(this.$el.html(this.template(this.model.toJSON())));
  }
});