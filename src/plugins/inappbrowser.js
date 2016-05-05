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

            $cordova.register(ref, '$cordovaInAppBrowser:loadstart');
            $cordova.register(ref, '$cordovaInAppBrowser:loadstop');
            $cordova.register(ref, '$cordovaInAppBrowser:loaderror');
            $cordova.register(ref, '$cordovaInAppBrowser:exit');

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
        $on: function(event, fn) {
            return $cordova.$on(event, fn, '$cordovaNetworkInformation');
        }
    };
}]);
