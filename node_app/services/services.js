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
								referenceUrl: "sms://"
							},
							{
								shortcutId: 2,
								name: "icon2",
								shortcutImageUrl: "/app_ico/override/asv/02.png",
								referenceUrl: "fblogin://"
							}
						],
						ice: [
							{
								shortcutId: 3,
								name: "icon3",
								shortcutImageUrl: "/app_ico/override/asv/03.png",
								referenceUrl: "sms://"
							},
							{
								shortcutId: 4,
								name: "icon4",
								shortcutImageUrl: "/app_ico/override/asv/04.png",
								referenceUrl: "fblogin://"
							}
						]
					};

					var $objApplicationsData = {
						facebook: {
							appId: 1,
							shortcutImageUrl: "/app_ico/origin/facebook/120x120.png",
							referenceUrl: "fblogin://",
							name: "Facebook"
						},
						sms: {
							appId: 2,
							shortcutImageUrl: "/app_ico/origin/sms/120x120.png",
							referenceUrl: "sms://",
							name: "Sms"
						},
						map: {
							appId: 3,
							shortcutImageUrl: "/app_ico/origin/map/120x120.png",
							referenceUrl: "map://",
							name: "Map"
						}
					};

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
								if (items[i].shortcutId == shortcutId) item = items[i];
							}
						});
						return item;
					};

					return iceWebShortcutAPI;
				}
		);
