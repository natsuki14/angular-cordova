"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CordovaService = (function () {
    function CordovaService() {
        var _this = this;
        this.callbacks = [];
        this.listeners = {};
        this.events = {};
        this.ready = false;
        this.platformId = window.cordova.platformId;
        this.register(document, '$cordova:deviceready');
        this.on('$cordova:deviceready', function () {
            _this.ready = true;
            for (var i = 0; i < _this.callbacks.length; i++) {
                _this.callbacks[i]();
            }
        });
    }
    CordovaService.prototype.register = function (element, event) {
        var _this = this;
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }
        if (this.listeners[event]) {
            throw new Error('angular-cordova: event "' + String(event) + '" is already registered');
        }
        this.listeners[event] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (_this.events[event]) {
                for (var i = 0; i < _this.events[event].length; i++) {
                    _this.events[event][i].apply(_this.events[event][i], args || []);
                }
            }
        };
        element.addEventListener(event.split(":")[1], this.listeners[event], false);
    };
    CordovaService.prototype.unregister = function (element, event) {
        if (!this.listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }
        element.removeEventListener(event.split(":")[1], this.listeners[event], false);
    };
    CordovaService.prototype.on = function (event, fn, prefix) {
        if (!prefix && event && event.split(":").length === 0) {
            prefix = "$cordova";
        }
        if (prefix) {
            event = prefix + ":" + event;
        }
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }
        if (!this.listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(fn);
    };
    CordovaService.prototype.deviceready = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.ready) {
                resolve();
            }
            else {
                _this.callbacks.push(resolve);
            }
        });
    };
    CordovaService = __decorate([
        core_1.Injectable()
    ], CordovaService);
    return CordovaService;
}());
exports.CordovaService = CordovaService;
