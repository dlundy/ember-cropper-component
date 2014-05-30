App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({

});

App.ImageCropperComponent = Ember.Component.extend({
  classNames: ['image-cropper'],

});
