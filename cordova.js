'use strict';
angular.module('ngCordova', [])
.provider('$cordova', [function() {
    var _this = this;

    var callbacks = [];
    var listeners = {};
    var events = {};
    var ready = false;

    var execute = function(event, args) {
        if (events[event]) {
            for (var i = 0; i < events[event].length; i++) {
                events[event][i].apply(events[event][i], args || []);
            }
        }
    };

    _this.registerEvent = function(element, event) {
        if (listeners[event]) {
            console.warn('angular-cordova: event "' + String(event) + '" is already registered');
            return;
        }

        listeners[event] = function() {
            execute(event, arguments);
        };

        element.addEventListener(event, listeners[event], false);
    };

    _this.unregisterEvent = function(element, event) {
        element.removeEventListener(event, listeners[event], false);
    };

    _this.platformId = window.cordova.platformId;

    _this.on = function(event, fn) {
        if (!listeners[event]) {
            console.warn('angular-cordova: "' + String(event) + '" is not a registered event');
            return;
        }

        if (!events[event]) {
            events[event] = [];
        }

        events[event].push(fn);
    };

    _this.registerEvent(document, 'deviceready');

    _this.on('deviceready', function() {
        ready = true;

        angular.forEach(callbacks, function(callback) {
            callback();
        });
    });

    _this.$get = ['$q', function($q) {
        var deviceready = function() {
            return $q(function(resolve) {
                if (ready) {
                    resolve();
                } else {
                    callbacks.push(function() {
                        resolve();
                    });
                }
            });
        };

        return {
            registerEvent: _this.registerEvent,
            uregisterEvent: _this.unregisterEvent,
            on: _this.on,
            $q: function(fn) {
                return function() {
                    var q = $q.defer();
                    var args = Array.from(arguments);
                    args.push(q);

                    deviceready().then(function() {
                        fn.apply(fn, args);
                    });

                    return q.promise;
                };
            },
            platformId: _this.platformId
        };
    }];
}]);
