"use strict";
var Observable_1 = require('rxjs/Observable');
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
