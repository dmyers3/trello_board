var NotificationsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "click .x_close": "closeNotifications",
  },
  documentCloseNotifications: function(e) {
    e.preventDefault();
    if (!e.target.closest('.notification_container')) {
      this.closeNotifications(e);
    }
  },
  closeNotifications: function(e) {
    e.preventDefault();
    this.remove();
    $(document).off("click", this.documentCloseNotifications);
  },
  template: App.templates.notification,
  render: function() {
    this.remove();
    $('header').append(this.$el.html(this.template({notifications: App.notifications.toJSON()})));
    this.delegateEvents();
    $(document).on("click", this.documentCloseNotifications.bind(this));
  }
})