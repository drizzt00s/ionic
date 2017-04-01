angular.module('App', ['ionic'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url:'/home',
		templateUrl:'views/home/home.html'
	})
	.state('reservation', {
		url:'/reservation',
		templateUrl:'views/reservation/reservation.html',
		controller:'reservationController'
	})
	.state('weather', {
		url:'/weather',
		templateUrl:'views/weather/weather.html',
		controller:'weatherController'
	})
	.state('restaurants', {
		url:'/restaurants',
		templateUrl:'views/restaurants/restaurants.html',
		controller:'restaurantController'
	})
	.state('tour', {
		url:'/tour',
		templateUrl:'views/tour/tour.html'
	});


	//reservation
	$urlRouterProvider.otherwise('/home');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
