// cordova-plugin-inappbrowser
'use strict';
angular.module('ngCordova')
.factory('$cordovaInAppBrowser', ['$q', '$cordova', function($q, $cordova) {
    return {
        open: $cordova.$q(function(url, target, options, $q) {
            var o = [];

            angular.forEach(options, function (value, key) {
                o.push(key + '=' + value);
            });

            var ref = window.cordova.InAppBrowser.open(url, target, o.join(","));

            $cordova.registerEvent(ref, 'loadstart');
            $cordova.registerEvent(ref, 'loadstop');
            $cordova.registerEvent(ref, 'loaderror');
            $cordova.registerEvent(ref, 'exit');

            $q.promise.close = function() {
                ref.close();
                ref = null;
            };
            $q.promise.show = function() {
                ref.show();
            };
            $q.promise.executeScript = function(details) {
                return $q(function(resolve) {
                    ref.executeScript(details, resolve);
                });
            };
            $q.promise.insertCSS = function(details) {
                return $q(function(resolve) {
                    ref.insertCSS(details, resolve);
                });
            };

            return $q.promise;
        }),
        on: $cordova.on
    };
}]);
