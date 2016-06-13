// https://github.com/arnesson/cordova-plugin-firebase
'use strict';
angular.module('ngCordova')
.factory('$cordovaFirebase', ['$cordova', function($cordova) {
    return {
        getRegistrationId: $cordova.$q(function($q) {
            window.firebase.getRegistrationId($q.resolve, $q.reject);
        })
    };
}]);
