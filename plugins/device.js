// cordova-plugin-device
'use strict';
angular.module('ngCordova')
.factory('$cordovaDevice', ['$cordova', function($cordova) {
    return {
        platform: $cordova.$q(function($q) {
            $q.resolve(window.device.platform);
        }),
        version: $cordova.$q(function($q) {
            $q.resolve(window.device.version);
        }),
        uuid: $cordova.$q(function($q) {
            $q.resolve(window.device.uuid);
        }),
        cordova: $cordova.$q(function($q) {
            $q.resolve(window.device.cordova);
        }),
        model: $cordova.$q(function($q) {
            $q.resolve(window.device.model);
        }),
        isVirtual: $cordova.$q(function($q) {
            $q.resolve(window.device.isVirtual);
        }),
        serial: $cordova.$q(function($q) {
            $q.resolve(window.device.serial);
        })
    };
}]);
