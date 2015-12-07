/**
 * @ngdoc controller
 * @name iceWebShortcut.controllers
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */
angular.module("iceWebShortcut.controllers", [])
		.controller("getListShortcutCtrl", function ($scope, $location, iceWebShortcutAPIservice) {
			$scope.shortcutList = iceWebShortcutAPIservice.getListShortcut();
			$scope.go = function (path) {
				$location.path(path);
			}
		})
		.controller("chooseStartUpPoint", function ($scope, $routeParams, iceWebShortcutAPIservice) {
			$scope.shortcutId = $routeParams.shortcut_id;
			$scope.appList = iceWebShortcutAPIservice.getListApplication();
			$scope.confirm = function(){
				alert(123123);
			}
		})
		.controller("setShortcutStartPoint", function ($scope, $routeParams, iceWebShortcutAPIservice) {
			$scope.id = $routeParams.id;
			$scope.appList = iceWebShortcutAPIservice.getListApplication();
			$scope.shortcutItem = iceWebShortcutAPIservice.getShortcutItem($scope.id);
			console.log($scope.shortcutItem);
		});
