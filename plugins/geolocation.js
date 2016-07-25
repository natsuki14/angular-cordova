// cordova-plugin-geolocation
'use strict';
angular.module('ngCordova')
.constant('$cordovaPositionError', {
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3
})
.factory('$cordovaGeolocation', ['$cordova', function($cordova) {
    return {
        getCurrentPosition: $cordova.$q(function($q) {
            window.navigator.geolocation.getCurrentPosition($q.resolve, $q.reject);
        }),
        watchPosition: $cordova.$q(function($q, options) {
            var watchID = window.navigator.geolocation.watchPosition($q.notify, $q.reject, options);

            $q.promise.clearWatch = function() {
                window.navigator.geolocation.clearWatch(watchID);
            };

            return $q.promise;
        })
    };
}]);
