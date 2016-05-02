// cordova-plugin-file
'use strict';
angular.module('ngCordova')
.constant('$cordovaFileError', {
    NOT_FOUND_ERR: 1,
    SECURITY_ERR: 2,
    ABORT_ERR: 3,
    NOT_READABLE_ERR: 4,
    ENCODING_ERR: 5,
    NO_MODIFICATION_ALLOWED_ERR: 6,
    INVALID_STATE_ERR: 7,
    SYNTAX_ERR: 8,
    INVALID_MODIFICATION_ERR: 9,
    QUOTA_EXCEEDED_ERR: 10,
    TYPE_MISMATCH_ERR: 11,
    PATH_EXISTS_ERR: 12
})
.factory('$cordovaFile', ['$cordova', function($cordova) {
    var resolveLocalFileSystemURL = $cordova.$q(function(path, $q) {
        if (!path) {
            $q.reject('path is missing');
        }

        if ((/^\//.test(path))) {
            $q.reject('path cannot start with /');
        }

        window.resolveLocalFileSystemURL(path, $q.resolve, $q.reject);

        $q.promise.abort = $q.reject;

        return $q.promise;
    });

    var getFile = $cordova.$q(function(path, fileName, options, $q) {
        if (!fileName) {
            $q.reject('fileName is missing');
        }

        if ((/^\//.test(fileName))) {
            $q.reject('fileName cannot start with /');
        }

        resolveLocalFileSystemURL(path).then(function(fileSystem) {
            fileSystem.getFile(fileName, options || {create: false}, $q.resolve, $q.reject);
        }, $q.reject);

        $q.promise.abort = $q.reject;

        return $q.promise;
    });

    var getDirectory = $cordova.$q(function(path, dirName, options, $q) {
        if (!dirName) {
            $q.reject('dirName is missing');
        }

        if ((/^\//.test(dirName))) {
            $q.reject('dirName cannot start with /');
        }

        resolveLocalFileSystemURL(path).then(function(fileSystem) {
            fileSystem.getDirectory(dirName, options || {create: false}, $q.resolve, $q.reject);
        }, $q.reject);

        $q.promise.abort = $q.reject;

        return $q.promise;
    });

    var createReader = $cordova.$q(function(fileEntry, $q) {
        var reader = new FileReader();

        reader.onloadend = function(evt) {
            if (evt.target.result !== undefined || evt.target.result !== null) {
                $q.resolve(evt.target.result);
            } else {
                $q.reject(evt.target.error);
            }
        };

        $q.promise.readAsText = function() {
            fileEntry.file(function(fileData) {
                reader.readAsText(fileData);
            });
        };
        $q.promise.readAsDataURL = function() {
            fileEntry.file(function(fileData) {
                reader.readAsDataURL(fileData);
            });
        };
        $q.promise.readAsBinaryString = function() {
            fileEntry.file(function(fileData) {
                reader.readAsBinaryString(fileData);
            });
        };
        $q.promise.readAsArrayBuffer = function() {
            fileEntry.file(function(fileData) {
                reader.readAsArrayBuffer(fileData);
            });
        };

        $q.promise.abort = reader.abort;

        return $q.promise;
    });

    var createWriter = $cordova.$q(function(fileEntry, $q) {
        fileEntry.createWriter(function(writer) {
            writer.onwriteend = function(evt) {
                if (this.error) {
                    $q.reject(this.error);
                } else {
                    $q.resolve(evt);
                }
            };

            $q.promise.write = function(contents, truncate) {
                if (truncate) {
                    writer.truncate(true);
                } else {
                    writer.seek(writer.length);
                }

                writer.write(contents);
            };

            $q.promise.abort = writer.abort;
        });

        return $q.promise;
    });

    return {
        getFreeDiskSpace: $cordova.$q(function($q) {
            window.cordova.exec($q.resolve, $q.reject, 'File', 'getFreeDiskSpace', []);
        }),
        getFile: getFile,
        getDirectory: getDirectory,
        createFile: function(path, fileName, replace) {
            return getFile(path, fileName, {
                create: true,
                exclusive: !replace
            });
        },
        createDirectory: function(path, dirName, replace) {
            return getDirectory(path, dirName, {
                create: true,
                exclusive: !replace
            });
        },
        removeFile: $cordova.$q(function(path, fileName, $q) {
            getFile(path, fileName).then(function(fileEntry) {
                fileEntry.remove($q.resolve, $q.reject);
            }, $q.reject);
        }),
        removeDir: $cordova.$q(function(path, fileName, $q) {
            getDirectory(path, fileName).then(function(dirEntry) {
                dirEntry.remove($q.resolve, $q.reject);
            }, $q.reject);
        }),
        removeRecursively: $cordova.$q(function(path, fileName, $q) {
            getDirectory(path, fileName).then(function(dirEntry) {
                dirEntry.removeRecursively($q.resolve, $q.reject);
            }, $q.reject);
        }),
        writeFile: $cordova.$q(function(path, fileName, contents, truncate, $q) {
            return getFile(path, fileName, {
                create: true,
                exclusive: false
            }).then(function(fileEntry) {
                var writer = createWriter(fileEntry);
                writer.then($q.resolve, $q.reject);
                writer.write(contents, truncate);
                return writer;
            }, $q.reject);
        }),
        readAsText: $cordova.$q(function(path, fileName, $q) {
            return getFile(path, fileName).then(function(fileEntry) {
                var reader = createReader(fileEntry);
                reader.then($q.resolve, $q.reject);
                reader.readAsText();
                return reader;
            }, $q.reject);
        }),
        readAsDataURL: $cordova.$q(function(path, fileName, $q) {
            return getFile(path, fileName).then(function(fileEntry) {
                var reader = createReader(fileEntry);
                reader.then($q.resolve, $q.reject);
                reader.readAsDataURL();
                return reader;
            }, $q.reject);
        }),
        readAsBinaryString: $cordova.$q(function(path, fileName, $q) {
            return getFile(path, fileName).then(function(fileEntry) {
                var reader = createReader(fileEntry);
                reader.then($q.resolve, $q.reject);
                reader.readAsBinaryString();
                return reader;
            }, $q.reject);
        }),
        readAsArrayBuffer: $cordova.$q(function(path, fileName, $q) {
            return getFile(path, fileName).then(function(fileEntry) {
                var reader = createReader(fileEntry);
                reader.then($q.resolve, $q.reject);
                reader.readAsArrayBuffer();
                return reader;
            }, $q.reject);
        }),
        moveFile: $cordova.$q(function(path, fileName, newPath, newFileName, $q) {
            getFile(path, fileName).then(function(fileEntry) {
                getFile(newPath, newFileName).then(function(newFileEntry) {
                    fileEntry.moveTo(newFileEntry, newFileName, $q.resolve, $q.resolve);
                }, $q.reject);
            }, $q.reject);
        }),
        moveDirectory: $cordova.$q(function(path, dirName, newPath, newDirName, $q) {
            getDirectory(path, dirName).then(function(dirEntry) {
                getDirectory(newPath, newDirName).then(function(newDirEntry) {
                    dirEntry.moveTo(newDirEntry, newDirName, $q.resolve, $q.resolve);
                }, $q.reject);
            }, $q.reject);
        }),
        copyFile: $cordova.$q(function(path, fileName, newPath, newFileName, $q) {
            getFile(path, fileName).then(function(fileEntry) {
                getFile(newPath, newFileName).then(function(newFileEntry) {
                    fileEntry.copyTo(newFileEntry, newFileName, $q.resolve, $q.resolve);
                }, $q.reject);
            }, $q.reject);
        }),
        copyDirectory: $cordova.$q(function(path, dirName, newPath, newDirName, $q) {
            getDirectory(path, dirName).then(function(dirEntry) {
                getDirectory(newPath, newDirName).then(function(newDirEntry) {
                    dirEntry.copyTo(newDirEntry, newDirName, $q.resolve, $q.resolve);
                }, $q.reject);
            }, $q.reject);
        })
    };
}]);
