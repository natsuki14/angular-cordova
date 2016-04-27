// cordova-plugin-file-transfer
'use strict';
angular.module('ngCordova')
.constant('$cordovaFileTransferError', {
    FILE_NOT_FOUND_ERR: 1,
    INVALID_URL_ERR: 2,
    CONNECTION_ERR: 3,
    ABORT_ERR: 4,
    NOT_MODIFIED_ERR: 5
})
.factory('$cordovaFileTransfer', ['$timeout', '$cordova', function($timeout, $cordova) {
    return {
        upload: $cordova.$q(function(fileURL, server, options, trustAllHosts, $q) {
            var f = new window.FileTransfer();

            f.onprogress = function (progress) {
                $q.notify(progress);
            };

            $q.promise.abort = function () {
                f.abort();
            };

            f.upload(fileURL, server, $q.resolve, $q.reject, options, trustAllHosts);

            return $q.promise;
        }),
        download: $cordova.$q(function(source, target, trustAllHosts, options, $q) {
            var f = new window.FileTransfer();

            f.onprogress = function (progress) {
                $q.notify(progress);
            };

            $q.promise.abort = function () {
                f.abort();
            };

            f.download(source, target, $q.resolve, $q.reject, trustAllHosts, options);

            return $q.promise;
        })
    };
}]);
