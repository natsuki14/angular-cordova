"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
//cordova-plugin-network-information
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var _1 = require("../");
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Object.defineProperty(Connection, "UNKNOWN", {
        get: function () {
            return 'unknown';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "ETHERNET", {
        get: function () {
            return 'ethernet';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "WIFI", {
        get: function () {
            return 'wifi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_2G", {
        get: function () {
            return '2g';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_3G", {
        get: function () {
            return '3g';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_4G", {
        get: function () {
            return '4g';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "NONE", {
        get: function () {
            return 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL", {
        get: function () {
            return 'celluar';
        },
        enumerable: true,
        configurable: true
    });
    return Connection;
}());
exports.Connection = Connection;
var NetworkInformationService = /** @class */ (function () {
    function NetworkInformationService(zone) {
        this.zone = zone;
    }
    NetworkInformationService.prototype.online = function () {
        var _this = this;
        return _1.Cordova.deviceready.mergeMap(function () {
            return _1.ZoneObservable.create(_this.zone, function (observer) {
                document.addEventListener('online', observer.next, false);
                return function () {
                    document.removeEventListener('online', observer.next, false);
                };
            });
        });
    };
    NetworkInformationService.prototype.offline = function () {
        var _this = this;
        return _1.Cordova.deviceready.mergeMap(function () {
            return _1.ZoneObservable.create(_this.zone, function (observer) {
                document.addEventListener('offline', observer.next, false);
                return function () {
                    document.removeEventListener('offline', observer.next, false);
                };
            });
        });
    };
    NetworkInformationService.prototype.connectionType = function () {
        var _this = this;
        return _1.Cordova.deviceready.mergeMap(function () {
            return _1.ZoneObservable.of(_this.zone, window.navigator.connection.type);
        });
    };
    NetworkInformationService = __decorate([
        core_1.Injectable()
    ], NetworkInformationService);
    return NetworkInformationService;
}());
exports.NetworkInformationService = NetworkInformationService;
