var NotificationsView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "click .x_close": "closeNotifications"
  },
  closeNotifications: function(e) {
    e.preventDefault();
    this.remove();
  },
  template: App.templates.notification,
  render: function() {
    this.remove();
    $('header').append(this.$el.html(this.template({notifications: App.notifications.toJSON()})));
    this.delegateEvents();
  }
})