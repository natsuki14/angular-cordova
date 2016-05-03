// https://github.com/arnesson/cordova-plugin-facebook
'use strict';
angular.module('ngCordova')
.factory('$cordovaFacebook', ['$cordova', function($cordova) {
    return {
        login: $cordova.$q(function(permissions, $q) {
            window.facebookConnectPlugin.login(permissions, $q.resolve, $q.reject);
        }),
        showDialog: $cordova.$q(function(options, $q) {
            window.facebookConnectPlugin.showDialog(options, $q.resolve, $q.reject);
        }),
        api: $cordova.$q(function(path, permissions, $q) {
            window.facebookConnectPlugin.api(path, permissions, $q.resolve, $q.reject);
        }),
        getAccessToken: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getAccessToken($q.resolve, $q.reject);
        }),
        getLoginStatus: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getLoginStatus($q.resolve, $q.reject);
        }),
        logout: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logout($q.resolve, $q.reject);
        }),
        logEvent: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logEvent($q.resolve, $q.reject);
        }),
        logPurchase: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logPurchase($q.resolve, $q.reject);
        }),
        appInvite: $cordova.$q(function($q) {
            window.facebookConnectPlugin.appInvite($q.resolve, $q.reject);
        }),
        getDeferredApplink: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getDeferredApplink($q.resolve, $q.reject);
        }),
        activateApp: $cordova.$q(function($q) {
            window.facebookConnectPlugin.activateApp($q.resolve, $q.reject);
        })
    };
}]);
