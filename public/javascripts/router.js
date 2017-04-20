// don't need Router Constructor so use IIFE
var router = new (Backbone.Router.extend({
  routes: {
    "albums/new": App.newAlbum
    // can't use "/" for index route because routes already assumes "/". also need
    // to account for instances where there is no ending forward slash (because index
    // can have slash or no slash)
  },
  index: function() { 
    // App.indexView(); 
    // router.navigate(App.board.get('title'));
    console.log('index View');
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true});
});