/**
 * Created by hieunc on 07/12/2015.
 */

angular.module('iceWebShortcut', [
	"iceWebShortcut.services",
	"iceWebShortcut.controllers",
	'ngRoute'
]).
constant("Config", {
	"url": "http://192.168.1.16/jf2016/",
	"favicon": "common/favicon.png",
	"logo": "common/img/img_title_logo.png",
	"port": "80",
	"base": "/",
	"css": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
		"node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
		"common/css/main.css"
	]
}).
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
run(['$rootScope', 'Config', function ($rootScope, Config) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.title = current.$$route.title;
		$rootScope.appConfig = Config;
	})
}]);

