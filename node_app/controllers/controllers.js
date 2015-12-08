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
		.controller("chooseStartUpPoint", function ($scope, $routeParams, $route, $location, iceWebShortcutAPIservice) {
			$scope.appList = iceWebShortcutAPIservice.getListApplication();
			$scope.shortcutId = $routeParams.shortcut_id;
			$scope.appId = null;
			$scope.confirm = function (valid) {
				var confirmPath = "/confirm/:shortcut_id/:app_id";
				confirmPath = confirmPath.replace(":shortcut_id", $scope.shortcutId);
				confirmPath = confirmPath.replace(":app_id", $scope.appId);
				$location.path(confirmPath);
			}
		})
		.controller("confirmShortcutStartPoint", function ($scope, $routeParams, $location, $templateCache, iceWebShortcutAPIservice) {
			$scope.shortcutId = $routeParams.shortcut_id;
			$scope.appId = $routeParams.app_id;
			$scope.appItem = iceWebShortcutAPIservice.getApplicationItem($scope.appId);
			$scope.shortcutItem = iceWebShortcutAPIservice.getShortcutItem($scope.shortcutId);

			$scope.newShortcut = {
				name: $scope.appItem.name,
				referenceUrl: $scope.appItem.referenceUrl,
				shortcutImageUrl: $scope.shortcutItem.shortcutImageUrl
			};

			$scope.createShortcut = function (valid) {
				if (!valid) return;
				$scope.shortcutDataUrl = null;
				$scope.baseUrl = "http://192.168.1.16";
				iceWebShortcutAPIservice.getTemplate("template").success(function (response) {
					response = response.replace(/{{shortcutName}}/gi, $scope.newShortcut.name);
					response = response.replace(/{{shortcutImage}}/gi, $scope.baseUrl + $scope.newShortcut.shortcutImageUrl);
					response = response.replace(/{{shortcutReferenceUrl}}/gi, $scope.newShortcut.referenceUrl);
					window.location.replace("data:text/html;charset=utf-8," + window.encodeURIComponent(response));
				});
			};

		});
