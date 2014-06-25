'use strict';

angular.module('joonix', ['ngRoute', 'controllers'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/quote', {
				templateUrl: 'partials/quote.html',
			})
			.when('/service', {
				templateUrl: 'partials/service.html',
			})
			.when('/home', {
				templateUrl: 'partials/home.html',
			})
			.otherwise({
				redirectTo: '/home'
			})
	}])