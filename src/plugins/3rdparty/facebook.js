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
        })
    };
}]);
