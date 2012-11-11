App = Ember.Application.create();

/* Views */

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.AllContributorsView = Ember.View.extend({
  templateName: 'contributors'
});

/* Controllers */
App.ApplicationController = Ember.Controller.extend();
App.AllContributorsController = Ember.ArrayController.extend();


App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router){
            router.get('applicationController').connectOutlet('allContributors', [{login:'wycats'},{login:'tomdale'}]);
        }
    })
  })
});

App.initialize();
