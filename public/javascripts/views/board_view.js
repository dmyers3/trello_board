var BoardView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=board]").html()),
});