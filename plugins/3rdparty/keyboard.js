// cordova-plugin-keyboard
'use strict';
angular.module('ngCordova')
.factory('$cordovaKeyboard', ['$cordova', function($cordova) {
    return {
        shrinkView: $cordova.$q(function($q, bool) {
            $q.resolve(window.Keyboard.shrinkView(bool));
        }),
        hideFormAccessoryBar: $cordova.$q(function($q, bool) {
            $q.resolve(window.Keyboard.hideFormAccessoryBar(bool));
        }),
        disableScrollingInShrinkView: $cordova.$q(function($q, bool) {
            $q.resolve(window.Keyboard.disableScrollingInShrinkView(bool));
        }),
        hide: $cordova.$q(function($q) {
            $q.resolve(window.Keyboard.hide());
        }),
        show: $cordova.$q(function($q) {
            $q.resolve(window.Keyboard.show());
        }),
        isVisible: $cordova.$q(function($q) {
            $q.resolve(window.Keyboard.isVisible);
        }),
        automaticScrollToTopOnHiding: $cordova.$q(function($q, bool) {
            $q.resolve(window.Keyboard.automaticScrollToTopOnHiding = bool);
        }),
        $on: function(event, fn) {
            return $cordova.$on(event, fn, '$cordovaKeyboard');
        }
    };
}])
.config(['$cordovaProvider', function ($cordovaProvider) {
    $cordovaProvider.register(window, '$cordovaKeyboard:keyboardDidShow');
    $cordovaProvider.register(window, '$cordovaKeyboard:keyboardDidHide');
    $cordovaProvider.register(window, '$cordovaKeyboard:keyboardWillShow');
    $cordovaProvider.register(window, '$cordovaKeyboard:keyboardWillHide');
    $cordovaProvider.register(window, '$cordovaKeyboard:keyboardHeightWillChange');
}]);
