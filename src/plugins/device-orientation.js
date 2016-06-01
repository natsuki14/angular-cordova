// cordova-plugin-device-orientation
'use strict';
angular.module('ngCordova')
.constant('$cordovaCompassError', {
    COMPASS_INTERNAL_ERR: 0,
    COMPASS_NOT_SUPPORTED: 20
})
.factory('$cordovaDeviceOrientation', ['$cordova', function($cordova) {
    return {
        getCurrentHeading: $cordova.$q(function($q) {
            window.navigator.compass.getCurrentHeading($q.resolve, $q.reject);
        }),
        watchHeading: $cordova.$q(function($q, options) {
            var watchID = window.navigator.compass.watchHeading($q.notify, $q.reject, options);

            $q.promise.clearWatch = function () {
                window.navigator.compass.clearWatch(watchID);
            };

            return $q.promise;
        })
    };
}]);
