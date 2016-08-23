"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// cordova-plugin-statusbar
var cordova_service_1 = require('../cordova.service');
var CordovaStatusbarService = (function (_super) {
    __extends(CordovaStatusbarService, _super);
    function CordovaStatusbarService() {
        _super.apply(this, arguments);
    }
    CordovaStatusbarService.prototype.overlaysWebView = function (bool) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.overlaysWebView(bool));
            });
        });
    };
    CordovaStatusbarService.prototype.styleDefault = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.styleDefault());
            });
        });
    };
    CordovaStatusbarService.prototype.styleLightContent = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.styleLightContent());
            });
        });
    };
    CordovaStatusbarService.prototype.styleBlackTranslucent = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.styleBlackTranslucent());
            });
        });
    };
    CordovaStatusbarService.prototype.styleBlackOpaque = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.styleBlackOpaque());
            });
        });
    };
    CordovaStatusbarService.prototype.backgroundColorByName = function (color) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.backgroundColorByName(color));
            });
        });
    };
    CordovaStatusbarService.prototype.backgroundColorByHexString = function (colorHex) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.backgroundColorByHexString(colorHex));
            });
        });
    };
    CordovaStatusbarService.prototype.hide = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.hide());
            });
        });
    };
    CordovaStatusbarService.prototype.show = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.show());
            });
        });
    };
    CordovaStatusbarService.prototype.isVisible = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.StatusBar.isVisible());
            });
        });
    };
    return CordovaStatusbarService;
}(cordova_service_1.CordovaService));
exports.CordovaStatusbarService = CordovaStatusbarService;
