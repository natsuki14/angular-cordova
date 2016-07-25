// cordova-plugin-dialogs
'use strict';
angular.module('ngCordova')
.factory('$cordovaDialogs', ['$cordova', function($cordova) {
    return {
        alert: $cordova.$q(function($q, message, title, buttonName) {
            window.navigator.notification.alert(message, $q.resolve, title, buttonName);
        }),
        confirm: $cordova.$q(function($q, message, title, buttonLabels) {
            window.navigator.notification.confirm(message, $q.resolve, title, buttonLabels);
        }),
        prompt: $cordova.$q(function($q, message, title, buttonLabels, defaultText) {
            window.navigator.notification.prompt(message, $q.resolve, title, buttonLabels, defaultText);
        }),
        beep: $cordova.$q(function($q, times) {
            $q.resolve(window.navigator.notification.beep(times));
        })
    };
}]);
