// https://github.com/arnesson/cordova-plugin-firebase
'use strict';
angular.module('ngCordova')
.factory('$cordovaFirebase', ['$cordova', function($cordova) {
    return {
        getInstanceId: $cordova.$q(function($q) {
            window.FirebasePlugin.getInstanceId($q.resolve, $q.reject);
        }),
        onNotificationOpen: $cordova.$q(function($q) {
            window.FirebasePlugin.getInstanceId($q.notify, $q.reject);
        }),
        grantPermission: $cordova.$q(function($q) {
            window.FirebasePlugin.grantPermission($q.resolve, $q.reject);
        }),
        setBadgeNumber: $cordova.$q(function($q, number) {
            window.FirebasePlugin.setBadgeNumber(number, $q.resolve, $q.reject);
        }),
        getBadgeNumber: $cordova.$q(function($q) {
            window.FirebasePlugin.getBadgeNumber($q.resolve, $q.reject);
        }),
        subscribe: $cordova.$q(function($q, topic) {
            window.FirebasePlugin.subscribe(topic, $q.resolve, $q.reject);
        }),
        unsubscribe: $cordova.$q(function($q, topic) {
            window.FirebasePlugin.unsubscribe(topic, $q.resolve, $q.reject);
        }),
        logEvent: $cordova.$q(function($q, name, params) {
            window.FirebasePlugin.logEvent(name, params, $q.resolve, $q.reject);
        }),
        fetch: $cordova.$q(function($q) {
            window.FirebasePlugin.fetch($q.resolve, $q.reject);
        }),
        activateFetched: $cordova.$q(function($q) {
            window.FirebasePlugin.activateFetched($q.resolve, $q.reject);
        }),
        getValue: $cordova.$q(function($q, key) {
            window.FirebasePlugin.getValue(key, $q.resolve, $q.reject);
        }),
        getByteArray: $cordova.$q(function($q, key) {
            window.FirebasePlugin.getByteArray(key, $q.resolve, $q.reject);
        }),
        getInfo: $cordova.$q(function($q) {
            window.FirebasePlugin.getInfo($q.resolve, $q.reject);
        }),
        setConfigSettings: $cordova.$q(function($q, settings) {
            window.FirebasePlugin.setConfigSettings(settings, $q.resolve, $q.reject);
        }),
        setDefaults: $cordova.$q(function($q, defaults) {
            window.FirebasePlugin.setConfigSettings(defaults, $q.resolve, $q.reject);
        })
    };
}]);
