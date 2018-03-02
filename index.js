"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
var Cordova;
(function (Cordova) {
    Cordova.platformId = window.cordova.platformId;
    Cordova.deviceready = Observable_1.Observable.create(function (observer) {
        var fn = function () {
            observer.next(null);
            observer.complete();
        };
        document.addEventListener('deviceready', fn, false);
        return function () {
            document.removeEventListener('deviceready', fn, false);
        };
    }).share();
    Cordova.deviceready.subscribe();
})(Cordova = exports.Cordova || (exports.Cordova = {}));
var ZoneObservable;
(function (ZoneObservable) {
    function create(zone, fn) {
        return Observable_1.Observable.create(function (observer) {
            fn({
                next: function (emit) {
                    zone.run(function () {
                        observer.next(emit);
                    });
                },
                error: function (error) {
                    zone.run(function () { return observer.error(error); });
                },
                complete: function () {
                    zone.run(function () { return observer.complete(); });
                }
            });
        });
    }
    ZoneObservable.create = create;
    function of(zone, emit) {
        return Observable_1.Observable.create(function (observer) {
            zone.run(function () { return observer.next(emit); });
            zone.run(function () { return observer.complete(); });
        });
    }
    ZoneObservable.of = of;
})(ZoneObservable = exports.ZoneObservable || (exports.ZoneObservable = {}));
