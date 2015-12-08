/**
 * @ngdoc service
 * @name getShortcutList
 * @description
 * _Please update the description and dependencies._
 *
 * */
angular.module('iceWebShortcut.services', [])
		.factory('iceWebShortcutAPIservice', function ($filter) {
					var iceWebShortcutAPI = {};
					var $objShortcutData = {
						asv: [
							{
								shortcutId: 1,
								name: "icon1",
								shortcutImageUrl: "/app_ico/override/asv/01.png",
							},
							{
								shortcutId: 2,
								name: "icon2",
								shortcutImageUrl: "/app_ico/override/asv/02.png",
							}
						],
						ice: [
							{
								shortcutId: 3,
								name: "icon3",
								shortcutImageUrl: "/app_ico/override/asv/03.png",
							},
							{
								shortcutId: 4,
								name: "icon4",
								shortcutImageUrl: "/app_ico/override/asv/04.png",
							}
						]
					};

					var $objApplicationsData = [
						{
							appId: 1,
							appImageUrl: "/app_ico/origin/facebook/120x120.png",
							referenceUrl: "fblogin://",
							name: "Facebook"
						},
						{
							appId: 2,
							appImageUrl: "/app_ico/origin/sms/120x120.png",
							referenceUrl: "sms://",
							name: "Sms"
						},
						{
							appId: 3,
							appImageUrl: "/app_ico/origin/map/120x120.png",
							referenceUrl: "map://",
							name: "Map"
						}
					];

					iceWebShortcutAPI.getListShortcut = function () {
						return $objShortcutData;
					};

					iceWebShortcutAPI.getListApplication = function () {
						return $objApplicationsData;
					};

					iceWebShortcutAPI.getShortcutItem = function (shortcutId) {
						var item = null;
						angular.forEach($objShortcutData, function (items) {
							for (var i = 0; i < items.length; i++) {
								if (items[i].shortcutId == shortcutId) {
									item = items[i];
									return;
								}
							}
						});
						return item;
					};

					iceWebShortcutAPI.getApplicationItem = function (appId) {
						var item = null;
						angular.forEach($objApplicationsData, function (app) {
							if (app.appId == appId) {
								item = app;
								return
							}
						});
						return item;
					};

					return iceWebShortcutAPI;
				}
		);
