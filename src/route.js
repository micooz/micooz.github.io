import angular from 'angular';
require('angular-route');
require('./controllers/home.js');

let app = angular.module('app', ['ngRoute', 'controllers']);

app.config([
	'$routeProvider', ($routeProvider) => {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'AboutController'
			});
	}
]);