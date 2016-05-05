// cordova-plugin-battery-status
'use strict';
angular.module('ngCordova')
.factory('$cordovaBatteryStatus', ['$cordova', function($cordova) {
    return {
        $on: function(event, fn) {
            return $cordova.$on(event, fn, '$cordovaBatteryStatus');
        }
    };
}])
.config(['$cordovaProvider', function ($cordovaProvider) {
    $cordovaProvider.register(window, '$cordovaBatteryStatus:batterystatus');
    $cordovaProvider.register(window, '$cordovaBatteryStatus:batterycritical');
    $cordovaProvider.register(window, '$cordovaBatteryStatus:batterylow');
}]);
