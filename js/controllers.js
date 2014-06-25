'use strict';

angular.module('controllers', [])
	.config(function($compileProvider) {
		// Add skype to the default list of href protocols
		$compileProvider.aHrefSanitizationWhitelist(
			/^\s*(https?|ftp|mailto|tel|file|skype):/
		);
	})
	.controller('QuoteCtrl', function($scope) {
		$scope.quoteForm;
	})
	.controller('NavCtrl', function($scope, $rootScope, $location) {
		$scope.active = function(path) {
			return $location.path() == path;
		}
	})
	.controller('SocialCtrl', function($scope) {
		// Variant of generated code from: http://www.jottings.com/obfuscator/
		var decrypt = function(coded, key) {
			var shift = coded.length
			var result = "";

			for (var i = 0; i < coded.length; i++) {
				if (key.indexOf(coded.charAt(i)) == -1) {
					var ltr = coded.charAt(i)
					result += (ltr)
				} else {
					var ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
					result += (key.charAt(ltr))
				}
			}
			return result;
		}

		// Spam bots be gone
		$scope.mailto = decrypt(
			"W0p9@8990W4.5J",
			"oABfHEwGK2YnPX9QgpUM71ybZ0aNsTvujhel3LzIcq5idV8xJDCrSkROtWF6m4");

		$scope.skype = decrypt(
			"1p91Cpx?5p99",
  			"Oy8eBS6PEC0sIWqnAaFbRuzlHw7hmpg1Nct9v2VxZrJLk5Qd3KiMXYUGf4DoTj");

		$scope.phone = decrypt(
			"+EUXooIdpEdd",
  			"U3VHjB1847gbxpD2wGiXERuQcaOdtWrJAqFny0mY9e5vZszLTS6NIKoMPfCkhl");
	});