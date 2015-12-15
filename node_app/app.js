/**
 * Created by hieunc on 07/12/2015.
 */

angular.module('iceWebShortcut', [
	"iceWebShortcut.services",
	"iceWebShortcut.controllers",
	'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix = '!';

	$routeProvider
			.when("/home", {
				title: "各コンテンツDLページ",
				caseInsensitiveMatch: true,
				templateUrl: "partials/iceWebShortcutList.html",
				controller: "getListShortcutCtrl"
			})
			.when("/choose-app/:shortcut_id", {
				title: "アイコン設定_起動先選択",
				caseInsensitiveMatch: true,
				templateUrl: "partials/iceWebShortcutChooseStartUpPoint.html",
				controller: "chooseStartUpPoint"
			})
			.otherwise({redirectTo: '/home'});
}]).
run(['$rootScope', function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.title = current.$$route.title;
	})
}]);

