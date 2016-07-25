// cordova-plugin-device-motion
'use strict';
angular.module('ngCordova')
.factory('$cordovaDeviceMotion', ['$cordova', function($cordova) {
    return {
        getCurrentAcceleration: $cordova.$q(function($q) {
            window.navigator.accelerometer.getCurrentAcceleration($q.resolve, $q.reject);
        }),
        watchAcceleration: $cordova.$q(function($q, options) {
            var watchID = window.navigator.accelerometer.watchAcceleration($q.notify, $q.reject, options);

            $q.promise.clearWatch = function () {
                window.navigator.accelerometer.clearWatch(watchID);
            };

            return $q.promise;
        })
    };
}]);
