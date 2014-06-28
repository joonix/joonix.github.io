'use strict';

angular.module('joonix', ['ngRoute', 'angular-google-analytics', 'controllers'])
	.config(function(AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-4028165-6');

        // track all routes (or not)
        AnalyticsProvider.trackPages(true);

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
        AnalyticsProvider.ignoreFirstPageLoad(true);

        // Enable enhanced link attribution
        AnalyticsProvider.useEnhancedLinkAttribution(true);

        // change page event name
        AnalyticsProvider.setPageEvent('$routeChangeSuccess');
    })
    .run(function(Analytics) {
      // For automatic page tracking, need to inject Analytics at least once
    })
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