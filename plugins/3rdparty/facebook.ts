// https://github.com/arnesson/cordova-plugin-facebook
import { CordovaService } from '../../';

export class CordovaFacebookService extends CordovaService {
    login(permissions?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.login(permissions, resolve, reject);
            });
        });
    }
    getLoginStatus(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.getLoginStatus(resolve, reject);
            });
        });
    }
}

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
