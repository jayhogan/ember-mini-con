var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts');
  }
});
export default IndexRoute;
