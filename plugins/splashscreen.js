// cordova-plugin-splashscreen
'use strict';
angular.module('ngCordova')
.factory('$cordovaSplashscreen', ['$cordova', function($cordova) {
    return {
        hide: $cordova.$q(function($q) {
            $q.resolve(window.navigator.splashscreen.hide());
        }),
        show: $cordova.$q(function($q) {
            $q.resolve(window.navigator.splashscreen.show());
        })
    };
}]);
