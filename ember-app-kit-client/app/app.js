import Resolver from 'resolver';
import Showdown from 'showdown';
import moment from 'moment';
import registerComponents from 'appkit/utils/register_components';

var showdown = new Showdown.converter();

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

// TODO - Figure out how to register helpers with Ember App Kit
Ember.Handlebars.registerHelper('date', function(date) {
  return moment(date).fromNow();
});

Ember.Handlebars.helper('markdown', function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});

export default App;
