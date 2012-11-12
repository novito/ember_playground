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

/* Models? */

App.Player = Ember.Object.extend();
App.Player.reopenClass({
    find: function() {
      $.ajax({
          url: 'http://api.stackoverflow.com/1.1/tags/ruby/top-answerers/month',
          dataType: 'jsonp',
          context: this,
          success: function(response){
              response.data.top_users.forEach(function(player){
                  this.allPlayers.addObject(App.Player.create(player))
              },this)
          },
      });
      return this.allPlayers;
    }
});


App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router){
            router.get('applicationController').connectOutlet('allPlayers', App.Player.find());
        }
    })
  })
});

App.initialize();
