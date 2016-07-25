// cordova-plugin-globalization
'use strict';
angular.module('ngCordova')
.constant('$cordovaGlobalizationError', {
    UNKNOWN_ERROR: 0,
    FORMATTING_ERROR: 1,
    PARSING_ERROR: 2,
    PATTERN_ERROR: 3
})
.factory('$cordovaGlobalization', ['$cordova', function($cordova) {
    return {
        getPreferredLanguage: $cordova.$q(function($q) {
            window.navigator.globalization.getPreferredLanguage($q.resolve, $q.reject);
        }),
        getLocaleName: $cordova.$q(function($q) {
            window.navigator.globalization.getLocaleName($q.resolve, $q.reject);
        }),
        dateToString: $cordova.$q(function($q, date, options) {
            window.navigator.globalization.dateToString(date, $q.resolve, $q.reject, options);
        }),
        getCurrencyPattern: $cordova.$q(function($q, currencyCode) {
            window.navigator.globalization.getCurrencyPattern(currencyCode, $q.resolve, $q.reject);
        }),
        getDateNames: $cordova.$q(function($q, options) {
            window.navigator.globalization.getDateNames($q.resolve, $q.reject, options);
        }),
        getDatePattern: $cordova.$q(function($q, options) {
            window.navigator.globalization.getDatePattern($q.resolve, $q.reject, options);
        }),
        getFirstDayOfWeek: $cordova.$q(function($q) {
            window.navigator.globalization.getFirstDayOfWeek($q.resolve, $q.reject);
        }),
        getNumberPattern: $cordova.$q(function($q, options) {
            window.navigator.globalization.getNumberPattern($q.resolve, $q.reject, options);
        }),
        isDayLightSavingsTime: $cordova.$q(function($q, date) {
            window.navigator.globalization.isDayLightSavingsTime(date, $q.resolve, $q.reject);
        }),
        numberToString: $cordova.$q(function($q, number, options) {
            window.navigator.globalization.numberToString(number, $q.resolve, $q.reject, options);
        }),
        stringToDate: $cordova.$q(function($q, dateString, options) {
            window.navigator.globalization.stringToDate(dateString, $q.resolve, $q.reject, options);
        }),
        stringToNumber: $cordova.$q(function($q, string, options) {
            window.navigator.globalization.stringToNumber(string, $q.resolve, $q.reject, options);
        })
    };
}]);
