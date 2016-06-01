// cordova-plugin-media-capture
'use strict';
angular.module('ngCordova')
.constant('$cordovaMediaCaptureError', {
    CAPTURE_INTERNAL_ERR: 0,
    CAPTURE_APPLICATION_BUSY: 1,
    CAPTURE_INVALID_ARGUMENT: 2,
    CAPTURE_NO_MEDIA_FILES: 3,
    CAPTURE_PERMISSION_DENIED: 4,
    CAPTURE_NOT_SUPPORTED: 20
})
.factory('$cordovaMediaCapture', ['$cordova', function($cordova) {
    return {
        supportedAudioModes: $cordova.$q(function($q) {
            $q.resolve(window.navigator.device.capture.supportedAudioModes);
        }),
        supportedImageModes: $cordova.$q(function($q) {
            $q.resolve(window.navigator.device.capture.supportedImageModes);
        }),
        supportedVideoModes: $cordova.$q(function($q) {
            $q.resolve(window.navigator.device.capture.supportedVideoModes);
        }),
        captureAudio: $cordova.$q(function($q, options) {
            window.navigator.device.capture.captureAudio($q.resolve, $q.reject, options);
        }),
        captureImage: $cordova.$q(function($q, options) {
            window.navigator.device.capture.captureImage($q.resolve, $q.reject, options);
        }),
        captureVideo: $cordova.$q(function($q, options) {
            window.navigator.device.capture.captureVideo($q.resolve, $q.reject, options);
        })
    };
}]);
