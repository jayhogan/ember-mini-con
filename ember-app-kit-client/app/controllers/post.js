// Controllers serve as a proxy to the model to handle display specific
// properties and actions (events). You could consider them view models. 
var PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
      this.get('model').save();
    }
  }
});

export default PostController;