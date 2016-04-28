// cordova-plugin-vibration
'use strict';
angular.module('ngCordova')
.factory('$cordovaVibration', ['$cordova', function($cordova) {
    return {
        vibrate: $cordova.$q(function(time, $q) {
            $q.resolve(window.navigator.vibrate(time));
        })
    };
}]);
