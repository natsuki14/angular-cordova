// cordova-plugin-media
'use strict';
angular.module('ngCordova')
.constant('$cordovaMediaError', {
    MEDIA_ERR_ABORTED: 1,
    MEDIA_ERR_NETWORK: 2,
    MEDIA_ERR_DECODE: 3,
    MEDIA_ERR_NONE_SUPPORTED: 4
})
.factory('$cordovaMedia', ['$cordova', function($cordova) {
    return $cordova.$q(function(src, $q) {
        var media = new window.Media(src, $q.resolve, $q.reject, $q.notify);

        $q.promise.play = media.play;
        $q.promise.pause = media.pause;
        $q.promise.seekTo = media.seekTo;
        $q.promise.setVolume = media.setVolume;
        $q.promise.startRecord = media.startRecord;
        $q.promise.stopRecord = media.stopRecord;
        $q.promise.release = function() {
            media.release();
            media = undefined;
        };
        $q.promise.getCurrentPosition = $cordova.$q(function($q) {
            media.getCurrentPosition($q.resolve, $q.reject);
        });
        $q.promise.getCurrentAmplitude = $cordova.$q(function($q) {
            media.getCurrentAmplitude($q.resolve, $q.reject);
        });
        $q.promise.getDuration = $cordova.$q(function($q) {
            media.getDuration($q.resolve, $q.reject);
        });
        $q.promise.MEDIA_NONE = 0;
        $q.promise.MEDIA_STARTING = 1;
        $q.promise.MEDIA_RUNNING = 2;
        $q.promise.MEDIA_PAUSED = 3;
        $q.promise.MEDIA_STOPPED = 4;

        return $q.promise;
    });
}]);
