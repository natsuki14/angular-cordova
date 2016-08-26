"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// https://github.com/arnesson/cordova-plugin-firebase
var cordova_service_1 = require('../../cordova.service');
var CordovaFirebaseService = (function (_super) {
    __extends(CordovaFirebaseService, _super);
    function CordovaFirebaseService() {
        _super.apply(this, arguments);
    }
    CordovaFirebaseService.prototype.getInstanceId = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.getInstanceId(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.grantPermission = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.grantPermission(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.setBadgeNumber = function (number) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.setBadgeNumber(number, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.getBadgeNumber = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.getBadgeNumber(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.subscribe = function (topic) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.subscribe(topic, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.unsubscribe = function (topic) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.unsubscribe(topic, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.logEvent = function (name, params) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.logEvent(name, params, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.fetch = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.fetch(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.activateFetched = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.activateFetched(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.getValue = function (key) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.getValue(key, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.getByteArray = function (key) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.getByteArray(key, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.getInfo = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.getInfo(resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.setConfigSettings = function (settings) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.setConfigSettings(settings, resolve, reject);
            });
        });
    };
    CordovaFirebaseService.prototype.setDefaults = function (defaults, namespace) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.FirebasePlugin.setDefaults(defaults, namespace, resolve, reject);
            });
        });
    };
    return CordovaFirebaseService;
}(cordova_service_1.CordovaService));
exports.CordovaFirebaseService = CordovaFirebaseService;
