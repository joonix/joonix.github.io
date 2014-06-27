'use strict';

angular.module('joonix', ['ngRoute', 'controllers'])
	.config(function($routeProvider) {
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
	})
	.config(function($compileProvider) {
		// Add skype to the default list of href protocols
		$compileProvider.aHrefSanitizationWhitelist(
			/^\s*(https?|ftp|mailto|tel|file|skype):/
		);
	})
	.factory('apiUrl', function($location) {
		if ($location.host() == 'localhost') {
			return 'http://localhost:3000';
		} else {
			return 'http://api.joonix.se';
		}
	});