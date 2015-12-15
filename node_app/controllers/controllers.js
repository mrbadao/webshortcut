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
		.controller("getListShortcutCtrl", function ($scope, iceWebShortcutAPIservice) {
			$scope.shortcutList = iceWebShortcutAPIservice.getListShortcut();
			$scope.go = function (path) {
				window.open(path, '_blank');
			}
		})
		.controller("chooseStartUpPoint", function ($scope, $routeParams, $route, $location, iceWebShortcutAPIservice) {
			$scope.appList = iceWebShortcutAPIservice.getListApplication();
			$scope.shortcutId = $routeParams.shortcut_id;
			$scope.shortcutItem = iceWebShortcutAPIservice.getShortcutItem($scope.shortcutId);

			$scope.createShortcut = function (appId) {
				$scope.appItem = iceWebShortcutAPIservice.getApplicationItem(appId);
				$scope.newShortcut = {
					name: $scope.appItem.name,
					referenceUrl: $scope.appItem.referenceUrl,
					shortcutImageUrl: $scope.shortcutItem.shortcutImageUrl
				};
				$scope.shortcutDataUrl = null;
				$scope.baseUrl = "http://192.168.1.16";
				iceWebShortcutAPIservice.getTemplate("iceTemplate").success(function (response) {
					response = response.replace(/{{shortcutName}}/gi, $scope.newShortcut.name);
					response = response.replace(/{{shortcutImage}}/gi, $scope.baseUrl + $scope.newShortcut.shortcutImageUrl);
					response = response.replace(/{{shortcutReferenceUrl}}/gi, $scope.newShortcut.referenceUrl);
					window.location.replace("data:text/html;charset=utf-8," + window.encodeURIComponent(response));
					//console.log("data:text/html;charset=utf-8," + window.encodeURIComponent(response));
				});
			};
		});