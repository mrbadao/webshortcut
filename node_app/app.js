/**
 * Created by hieunc on 07/12/2015.
 */

angular.module('iceWebShortcut', [
	"iceWebShortcut.services",
	"iceWebShortcut.controllers",
	'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider
			.when("/home", {
				templateUrl: "partials/iceWebShortcutList.html",
				controller: "getListShortcutCtrl"
			})
			.when("/choose-app/:shortcut_id", {
				templateUrl: "partials/iceWebShortcutChooseStartUpPoint.html",
				controller: "chooseStartUpPoint"
			})
			.when("/confirm/:id", {
				templateUrl: "partials/iceWebShortcutChooseApp.html",
				controller: "setShortcutStartPoint"
			})
			.otherwise({redirectTo: '/home'});
	//$locationProvider.html5Mode(false);
}]);
