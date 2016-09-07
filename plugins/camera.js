"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// cordova-plugin-camera
var core_1 = require('@angular/core');
require('rxjs/add/operator/mergeMap');
var cordova_1 = require('../cordova');
var zone_1 = require('../zone');
var CameraDestinationType = (function () {
    function CameraDestinationType() {
    }
    Object.defineProperty(CameraDestinationType, "DATA_URL", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraDestinationType, "FILE_URI", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraDestinationType, "NATIVE_URI", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CameraDestinationType;
}());
exports.CameraDestinationType = CameraDestinationType;
var CameraEncodingType = (function () {
    function CameraEncodingType() {
    }
    Object.defineProperty(CameraEncodingType, "JPEG", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraEncodingType, "PNG", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    return CameraEncodingType;
}());
exports.CameraEncodingType = CameraEncodingType;
var CameraMediaType = (function () {
    function CameraMediaType() {
    }
    Object.defineProperty(CameraMediaType, "PICTURE", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraMediaType, "VIDEO", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraMediaType, "ALLMEDIA", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CameraMediaType;
}());
exports.CameraMediaType = CameraMediaType;
var CameraPictureSourceType = (function () {
    function CameraPictureSourceType() {
    }
    Object.defineProperty(CameraPictureSourceType, "PHOTOLIBRARY", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPictureSourceType, "CAMERA", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPictureSourceType, "SAVEDPHOTOALBUM", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    return CameraPictureSourceType;
}());
exports.CameraPictureSourceType = CameraPictureSourceType;
var CameraPopoverArrowDirection = (function () {
    function CameraPopoverArrowDirection() {
    }
    Object.defineProperty(CameraPopoverArrowDirection, "ARROW_UP", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPopoverArrowDirection, "ARROW_DOWN", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPopoverArrowDirection, "ARROW_LEFT", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPopoverArrowDirection, "ARROW_RIGHT", {
        get: function () { return 8; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraPopoverArrowDirection, "ARROW_ANY", {
        get: function () { return 15; },
        enumerable: true,
        configurable: true
    });
    return CameraPopoverArrowDirection;
}());
exports.CameraPopoverArrowDirection = CameraPopoverArrowDirection;
var CameraCameraDirection = (function () {
    function CameraCameraDirection() {
    }
    Object.defineProperty(CameraCameraDirection, "BACK", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraCameraDirection, "FRONT", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    return CameraCameraDirection;
}());
exports.CameraCameraDirection = CameraCameraDirection;
var CameraService = (function () {
    function CameraService(zone) {
        this.zone = zone;
    }
    CameraService.prototype.getPicture = function (options) {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.camera.getPicture(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error, options);
        }); });
    };
    CameraService.prototype.cleanup = function () {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.camera.cleanup(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    CameraService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], CameraService);
    return CameraService;
}());
exports.CameraService = CameraService;
