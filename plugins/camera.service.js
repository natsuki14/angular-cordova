"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// cordova-plugin-camera
var cordova_service_1 = require('../cordova.service');
var CordovaCameraDestinationType = (function () {
    function CordovaCameraDestinationType() {
    }
    Object.defineProperty(CordovaCameraDestinationType, "DATA_URL", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraDestinationType, "FILE_URI", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraDestinationType, "NATIVE_URI", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraDestinationType;
}());
exports.CordovaCameraDestinationType = CordovaCameraDestinationType;
var CordovaCameraEncodingType = (function () {
    function CordovaCameraEncodingType() {
    }
    Object.defineProperty(CordovaCameraEncodingType, "JPEG", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraEncodingType, "PNG", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraEncodingType;
}());
exports.CordovaCameraEncodingType = CordovaCameraEncodingType;
var CordovaCameraMediaType = (function () {
    function CordovaCameraMediaType() {
    }
    Object.defineProperty(CordovaCameraMediaType, "PICTURE", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraMediaType, "VIDEO", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraMediaType, "ALLMEDIA", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraMediaType;
}());
exports.CordovaCameraMediaType = CordovaCameraMediaType;
var CordovaCameraPictureSourceType = (function () {
    function CordovaCameraPictureSourceType() {
    }
    Object.defineProperty(CordovaCameraPictureSourceType, "PHOTOLIBRARY", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPictureSourceType, "CAMERA", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPictureSourceType, "SAVEDPHOTOALBUM", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraPictureSourceType;
}());
exports.CordovaCameraPictureSourceType = CordovaCameraPictureSourceType;
var CordovaCameraPopoverArrowDirection = (function () {
    function CordovaCameraPopoverArrowDirection() {
    }
    Object.defineProperty(CordovaCameraPopoverArrowDirection, "ARROW_UP", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPopoverArrowDirection, "ARROW_DOWN", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPopoverArrowDirection, "ARROW_LEFT", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPopoverArrowDirection, "ARROW_RIGHT", {
        get: function () { return 8; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraPopoverArrowDirection, "ARROW_ANY", {
        get: function () { return 15; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraPopoverArrowDirection;
}());
exports.CordovaCameraPopoverArrowDirection = CordovaCameraPopoverArrowDirection;
var CordovaCameraCameraDirection = (function () {
    function CordovaCameraCameraDirection() {
    }
    Object.defineProperty(CordovaCameraCameraDirection, "BACK", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaCameraCameraDirection, "FRONT", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    return CordovaCameraCameraDirection;
}());
exports.CordovaCameraCameraDirection = CordovaCameraCameraDirection;
var CordovaCameraService = (function (_super) {
    __extends(CordovaCameraService, _super);
    function CordovaCameraService() {
        _super.apply(this, arguments);
    }
    CordovaCameraService.prototype.getPicture = function (options) {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.navigator.camera.getPicture(resolve, reject, options);
            });
        });
    };
    CordovaCameraService.prototype.cleanup = function () {
        return this.deviceready().then(function () {
            return new Promise(function (resolve, reject) {
                window.navigator.camera.cleanup(resolve, reject);
            });
        });
    };
    return CordovaCameraService;
}(cordova_service_1.CordovaService));
exports.CordovaCameraService = CordovaCameraService;
