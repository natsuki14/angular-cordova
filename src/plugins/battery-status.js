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
    $cordovaProvider.registerEvent(window, '$cordovaBatteryStatus:batterystatus');
    $cordovaProvider.registerEvent(window, '$cordovaBatteryStatus:batterycritical');
    $cordovaProvider.registerEvent(window, '$cordovaBatteryStatus:batterylow');
}]);
