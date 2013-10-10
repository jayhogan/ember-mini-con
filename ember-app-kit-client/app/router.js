var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
  });
});

export default Router;
