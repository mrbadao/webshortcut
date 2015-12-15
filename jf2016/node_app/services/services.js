/**
 * @ngdoc service
 * @name getShortcutList
 * @description
 * _Please update the description and dependencies._
 *
 * */
angular.module('iceWebShortcut.services', [])
		.factory('iceWebShortcutAPIservice', function ($http, Config) {
					var iceWebShortcutAPI = {};
					var $objShortcutData = [
						{
							shortcutId: 1,
							name: "icon1",
							shortcutImageUrl: Config.url + "/app_ico/override/asv/01.png",
						},
						{
							shortcutId: 2,
							name: "icon2",
							shortcutImageUrl: Config.url + "/app_ico/override/asv/02.png",
						},

						{
							shortcutId: 3,
							name: "icon3",
							shortcutImageUrl: Config.url + "/app_ico/override/asv/03.png",
						},
						{
							shortcutId: 4,
							name: "icon4",
							shortcutImageUrl: Config.url + "/app_ico/override/asv/04.png",
						}
					];

					var $objApplicationsData = [
						{
							appId: 1,
							appImageUrl: Config.url + "app_ico/origin/message/120x120.png",
							referenceUrl: "message://",
							name: "メール"
						},
						{
							appId: 2,
							appImageUrl: Config.url + "app_ico/origin/sms/120x120.png",
							referenceUrl: "sms://",
							name: "メッセージ"
						},
						{
							appId: 3,
							appImageUrl: Config.url + "app_ico/origin/music/120x120.png",
							referenceUrl: "music://",
							name: "ミュージック"
						},
						{
							appId: 4,
							appImageUrl: Config.url + "app_ico/origin/app-setting/120x120.png",
							referenceUrl: "app-settings://",
							name: "写真"
						},
						{
							appId: 5,
							appImageUrl: Config.url + "app_ico/origin/videos/120x120.png",
							referenceUrl: "videos://",
							name: "ビデオ"
						},
						{
							appId: 6,
							appImageUrl: Config.url + "app_ico/origin/maps/120x120.png",
							referenceUrl: "maps://",
							name: "マップ"
						},
						{
							appId: 7,
							appImageUrl: Config.url + "app_ico/origin/calshow/120x120.png",
							referenceUrl: "calshow://",
							name: "カレンダー"
						},
						{
							appId: 8,
							appImageUrl: Config.url + "app_ico/origin/youtube/120x120.png",
							referenceUrl: "youtube://",
							name: "YouTube"
						},
						{
							appId: 9,
							appImageUrl: Config.url + "app_ico/origin/itms-apps/120x120.png",
							referenceUrl: "itms-apps://",
							name: "App Store"
						},
						{
							appId: 10,
							appImageUrl: Config.url + "app_ico/origin/ibooks/120x120.png",
							referenceUrl: "ibooks://",
							name: "iBooks"
						},
						{
							appId: 11,
							appImageUrl: Config.url + "app_ico/origin/itms/120x120.png",
							referenceUrl: "itms://",
							name: "iTunes Store"
						},
						{
							appId: 12,
							appImageUrl: Config.url + "app_ico/origin/line/120x120.png",
							referenceUrl: "line://",
							name: "LINE"
						},
						{
							appId: 13,
							appImageUrl: Config.url + "app_ico/origin/twitter/120x120.png",
							referenceUrl: "twitter://",
							name: "Twitter"
						},
						{
							appId: 14,
							appImageUrl: Config.url + "app_ico/origin/fb/120x120.png",
							referenceUrl: "fb://",
							name: "Facebook"
						},
						{
							appId: 15,
							appImageUrl: Config.url + "app_ico/origin/google/120x120.png",
							referenceUrl: "google://",
							name: "Google"
						}
					];

					iceWebShortcutAPI.getListShortcut = function () {
						return $objShortcutData;
					};

					iceWebShortcutAPI.getListApplication = function () {
						return $objApplicationsData;
					};

					iceWebShortcutAPI.getShortcutItem = function (shortcutId) {
						var shortcut = null;
						angular.forEach($objShortcutData, function (item) {
							if (item.shortcutId == shortcutId) {
								shortcut = item;
							}
						});
						return shortcut;
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

					iceWebShortcutAPI.getTemplate = function (name) {
						return $http.get("partials/" + name + ".html")
					};

					return iceWebShortcutAPI;
				}
		);
