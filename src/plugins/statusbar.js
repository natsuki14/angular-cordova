// cordova-plugin-statusbar
'use strict';
angular.module('ngCordova')
.factory('$cordovaStatusbar', ['$cordova', function($cordova) {
    return {
        overlaysWebView: $cordova.$q(function($q, bool) {
            $q.resolve(window.StatusBar.overlaysWebView(bool));
        }),
        styleDefault: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.styleDefault());
        }),
        styleLightContent: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.styleLightContent());
        }),
        styleBlackTranslucent: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.styleBlackTranslucent());
        }),
        styleBlackOpaque: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.styleBlackOpaque());
        }),
        backgroundColorByName: $cordova.$q(function($q, color) {
            $q.resolve(window.StatusBar.backgroundColorByName(color));
        }),
        backgroundColorByHexString: $cordova.$q(function($q, colorHex) {
            $q.resolve(window.StatusBar.backgroundColorByHexString(colorHex));
        }),
        hide: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.hide());
        }),
        show: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.show());
        }),
        isVisible: $cordova.$q(function($q) {
            $q.resolve(window.StatusBar.isVisible);
        })
    };
}]);
