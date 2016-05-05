// cordova-plugin-network-information
'use strict';
angular.module('ngCordova')
.constant('$cordovaConnection', {
    UNKNOWN: 'unknown',
    ETHERNET: 'ethernet',
    WIFI: 'wifi',
    CELL_2G: '2g',
    CELL_3G: '3g',
    CELL_4G: '4g',
    CELL: 'cellular',
    NONE: 'none'
})
.factory('$cordovaNetworkInformation', ['$cordova', function($cordova) {
    return {
        type: $cordova.$q(function($q) {
            $q.resolve(window.navigator.connection.type);
        }),
        $on: function(event, fn) {
            return $cordova.$on(event, fn, '$cordovaNetworkInformation');
        }
    };
}])
.config(['$cordovaProvider', function ($cordovaProvider) {
    $cordovaProvider.register(document, '$cordovaNetworkInformation:offline');
    $cordovaProvider.register(document, '$cordovaNetworkInformation:online');
}]);
