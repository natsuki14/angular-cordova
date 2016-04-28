// cordova-plugin-camera
'use strict';
angular.module('ngCordova')
.constant('$cordovaCameraDestinationType', {
    DATA_URL: 0,
    FILE_URI: 1,
    NATIVE_URI: 2
})
.constant('$cordovaCameraEncodingType', {
    JPEG: 0,
    PNG: 1
})
.constant('$cordovaCameraMediaType', {
    PICTURE: 0,
    VIDEO: 1,
    ALLMEDIA: 2
})
.constant('$cordovaCameraPictureSourceType', {
    PHOTOLIBRARY: 0,
    CAMERA: 1,
    SAVEDPHOTOALBUM: 2
})
.constant('$cordovaCameraPopoverArrowDirection', {
    ARROW_UP: 1,
    ARROW_DOWN: 2,
    ARROW_LEFT: 4,
    ARROW_RIGHT: 8,
    ARROW_ANY: 15
})
.constant('$cordovaCameraDirection', {
    BACK: 0,
    FRONT: 1
})
.factory('$cordovaCamera', ['$cordova', function($cordova) {
    return {
        getPicture: $cordova.$q(function(options, $q) {
            window.navigator.camera.getPicture($q.resolve, $q.reject, options);
        }),
        cleanup: $cordova.$q(function($q) {
            window.navigator.camera.cleanup($q.resolve, $q.reject);
        })
    };
}]);
