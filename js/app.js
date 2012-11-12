App = Ember.Application.create();

/* Views */

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.AllPlayersView = Ember.View.extend({
  templateName: 'players'
});

/* Controllers */
App.ApplicationController = Ember.Controller.extend();
App.AllPlayersController = Ember.ArrayController.extend();


App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router){
            router.get('applicationController').connectOutlet('allPlayers', [{name:'rivaldo'},{name:'ronaldinho'}]);
        }
    })
  })
});

App.initialize();
