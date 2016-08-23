"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Cordova;
(function (Cordova) {
    var callbacks = [];
    var listeners = {};
    var events = {};
    var ready = false;
    Cordova.platformId = window.cordova.platformId;
    register(document, 'CordovaService:deviceready');
    on('CordovaService:deviceready', function () {
        ready = true;
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    });
    function register(element, event) {
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format Service:event, e.g. CordovaService:deviceready');
        }
        if (listeners[event]) {
            throw new Error('angular-cordova: event "' + String(event) + '" is already registered');
        }
        listeners[event] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (events[event]) {
                for (var i = 0; i < events[event].length; i++) {
                    events[event][i].apply(events[event][i], args || []);
                }
            }
        };
        element.addEventListener(event.split(":")[1], listeners[event], false);
    }
    Cordova.register = register;
    function unregister(element, event) {
        if (!listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }
        element.removeEventListener(event.split(":")[1], listeners[event], false);
    }
    Cordova.unregister = unregister;
    function on(event, fn, prefix) {
        if (!prefix && event && event.split(":").length === 0) {
            prefix = "CordovaService";
        }
        if (prefix) {
            event = prefix + ":" + event;
        }
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format Service:event, e.g. CordovaService:deviceready');
        }
        if (!listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(fn);
    }
    Cordova.on = on;
    function deviceready() {
        return new Promise(function (resolve, reject) {
            if (ready) {
                resolve();
            }
            else {
                callbacks.push(resolve);
            }
        });
    }
    Cordova.deviceready = deviceready;
})(Cordova = exports.Cordova || (exports.Cordova = {}));
var CordovaService = (function () {
    function CordovaService() {
        this.register = Cordova.register;
        this.unregister = Cordova.unregister;
        this.on = Cordova.on;
        this.deviceready = Cordova.deviceready;
        this.platformId = Cordova.platformId;
    }
    CordovaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CordovaService);
    return CordovaService;
}());
exports.CordovaService = CordovaService;
