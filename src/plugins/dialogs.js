// cordova-plugin-dialogs
'use strict';
angular.module('ngCordova')
.factory('$cordovaDialogs', ['$cordova', function($cordova) {
    return {
        alert: $cordova.$q(function(message, title, buttonName, $q) {
            window.navigator.notification.alert(message, $q.resolve, title, buttonName);
        }),
        confirm: $cordova.$q(function(message, title, buttonLabels, $q) {
            window.navigator.notification.confirm(message, $q.resolve, title, buttonLabels);
        }),
        prompt: $cordova.$q(function(message, title, buttonLabels, defaultText, $q) {
            window.navigator.notification.prompt(message, $q.resolve, title, buttonLabels, defaultText);
        }),
        beep: $cordova.$q(function(times, $q) {
            $q.resolve(window.navigator.notification.beep(times));
        })
    };
}]);
