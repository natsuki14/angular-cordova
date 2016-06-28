// https://github.com/arnesson/cordova-plugin-firebase
'use strict';
angular.module('ngCordova')
.factory('$cordovaFirebase', ['$cordova', function($cordova) {
    return {
        getInstanceId: $cordova.$q(function($q) {
            window.FirebasePlugin.getInstanceId($q.resolve, $q.reject);
        }),
        grantPermission: $cordova.$q(function($q) {
            window.FirebasePlugin.grantPermission($q.resolve, $q.reject);
        }),
        subscribe: $cordova.$q(function($q, topic) {
            window.FirebasePlugin.subscribe(topic, $q.resolve, $q.reject);
        }),
        unsubscribe: $cordova.$q(function($q, topic) {
            window.FirebasePlugin.unsubscribe(topic, $q.resolve, $q.reject);
        }),
        logEvent: $cordova.$q(function($q, key, value) {
            window.FirebasePlugin.logEvent(key, value, $q.resolve, $q.reject);
        })
    };
}]);
