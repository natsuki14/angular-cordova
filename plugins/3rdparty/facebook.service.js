"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// https://github.com/jeduan/cordova-plugin-facebook4
var cordova_service_1 = require('../../cordova.service');
var CordovaFacebookService = (function (_super) {
    __extends(CordovaFacebookService, _super);
    function CordovaFacebookService() {
        _super.apply(this, arguments);
    }
    CordovaFacebookService.prototype.login = function (permissions) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.login(permissions, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.showDialog = function (options) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.showDialog(options, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.api = function (path, permissions) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.api(path, permissions, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.getAccessToken = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.getAccessToken(resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.getLoginStatus = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.getLoginStatus(resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.logout = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.logout(resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.logEvent = function (name, params, value) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.logEvent(name, params, value, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.logPurchase = function (value, currency) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.logPurchase(value, currency, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.appInvite = function (options) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.appInvite(options, resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.getDeferredApplink = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.getDeferredApplink(resolve, reject);
            });
        });
    };
    CordovaFacebookService.prototype.activateApp = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.activateApp(resolve, reject);
            });
        });
    };
    return CordovaFacebookService;
}(cordova_service_1.CordovaService));
exports.CordovaFacebookService = CordovaFacebookService;
