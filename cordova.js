"use strict";
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/share');
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
