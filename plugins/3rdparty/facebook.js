"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// https://github.com/arnesson/cordova-plugin-facebook
var _1 = require('../../');
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
    CordovaFacebookService.prototype.getLoginStatus = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.facebookConnectPlugin.getLoginStatus(resolve, reject);
            });
        });
    };
    return CordovaFacebookService;
}(_1.CordovaService));
exports.CordovaFacebookService = CordovaFacebookService;
/*
'use strict';
angular.module('ngCordova')
.factory('$cordovaFacebook', ['$cordova', function($cordova) {
    return {
        login: $cordova.$q(function($q, permissions) {
            window.facebookConnectPlugin.login(permissions, $q.resolve, $q.reject);
        }),
        showDialog: $cordova.$q(function($q, options) {
            window.facebookConnectPlugin.showDialog(options, $q.resolve, $q.reject);
        }),
        api: $cordova.$q(function($q, path, permissions) {
            window.facebookConnectPlugin.api(path, permissions, $q.resolve, $q.reject);
        }),
        getAccessToken: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getAccessToken($q.resolve, $q.reject);
        }),
        getLoginStatus: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getLoginStatus($q.resolve, $q.reject);
        }),
        logout: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logout($q.resolve, $q.reject);
        }),
        logEvent: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logEvent($q.resolve, $q.reject);
        }),
        logPurchase: $cordova.$q(function($q) {
            window.facebookConnectPlugin.logPurchase($q.resolve, $q.reject);
        }),
        appInvite: $cordova.$q(function($q) {
            window.facebookConnectPlugin.appInvite($q.resolve, $q.reject);
        }),
        getDeferredApplink: $cordova.$q(function($q) {
            window.facebookConnectPlugin.getDeferredApplink($q.resolve, $q.reject);
        }),
        activateApp: $cordova.$q(function($q) {
            window.facebookConnectPlugin.activateApp($q.resolve, $q.reject);
        })
    };
}]);
*/
