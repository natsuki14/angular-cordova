// cordova-plugin-battery-status
'use strict';
angular.module('ngCordova')
.factory('$cordovaBatteryStatus', ['$cordova', function($cordova) {
    return {
        on: $cordova.on
    };
}])
.config(['$cordovaProvider', function ($cordovaProvider) {
    $cordovaProvider.registerEvent(window, 'batterystatus');
    $cordovaProvider.registerEvent(window, 'batterycritical');
    $cordovaProvider.registerEvent(window, 'batterylow');
}]);
