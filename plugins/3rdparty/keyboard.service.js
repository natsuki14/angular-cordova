"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// cordova-plugin-keyboard
var cordova_service_1 = require('../../cordova.service');
var CordovaKeyboardService = (function (_super) {
    __extends(CordovaKeyboardService, _super);
    function CordovaKeyboardService() {
        _super.call(this);
        this.register(window, 'CordovaKeyboardService:keyboardDidShow');
        this.register(window, 'CordovaKeyboardService:keyboardDidHide');
        this.register(window, 'CordovaKeyboardService:keyboardWillShow');
        this.register(window, 'CordovaKeyboardService:keyboardWillHide');
        this.register(window, 'CordovaKeyboardService:keyboardHeightWillChange');
    }
    CordovaKeyboardService.prototype.shrinkView = function (bool) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.shrinkView(bool));
            });
        });
    };
    CordovaKeyboardService.prototype.hideFormAccessoryBar = function (bool) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.hideFormAccessoryBar(bool));
            });
        });
    };
    CordovaKeyboardService.prototype.disableScrollingInShrinkView = function (bool) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.disableScrollingInShrinkView(bool));
            });
        });
    };
    CordovaKeyboardService.prototype.hide = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.hide());
            });
        });
    };
    CordovaKeyboardService.prototype.show = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.show());
            });
        });
    };
    CordovaKeyboardService.prototype.isVisible = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.isVisible());
            });
        });
    };
    CordovaKeyboardService.prototype.automaticScrollToTopOnHiding = function (bool) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                resolve(window.Keyboard.automaticScrollToTopOnHiding = bool);
            });
        });
    };
    return CordovaKeyboardService;
}(cordova_service_1.CordovaService));
exports.CordovaKeyboardService = CordovaKeyboardService;
