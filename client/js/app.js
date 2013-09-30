App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
  });
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.get('model').save();
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});