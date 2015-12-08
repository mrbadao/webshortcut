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
				caseInsensitiveMatch: true,
				templateUrl: "partials/iceWebShortcutList.html",
				controller: "getListShortcutCtrl"
			})
			.when("/choose-app/:shortcut_id", {
				caseInsensitiveMatch: true,
				templateUrl: "partials/iceWebShortcutChooseStartUpPoint.html",
				controller: "chooseStartUpPoint"
			})
			.when("/confirm/:shortcut_id/:app_id", {
				caseInsensitiveMatch: true,
				templateUrl: "../partials/iceWebShortcutConfirm.html",
				controller: "confirmShortcutStartPoint"
			})
			.otherwise({redirectTo: '/home'});
	//$locationProvider.html5Mode(false);
}]);
