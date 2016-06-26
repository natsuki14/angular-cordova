// https://github.com/arnesson/cordova-plugin-firebase
'use strict';
angular.module('ngCordova')
.factory('$cordovaFirebase', ['$cordova', function($cordova) {
    return {
        getRegistrationId: $cordova.$q(function($q) {
            window.FirebasePlugin.getRegistrationId($q.resolve, $q.reject);
        }),
        logEvent: $cordova.$q(function($q, key, value) {
            window.FirebasePlugin.logEvent(key, value, $q.resolve, $q.reject);
        })
    };
}]);
