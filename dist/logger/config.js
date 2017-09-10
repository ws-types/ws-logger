"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:class-name
var LOGGER_SERVICE_CONFIG = /** @class */ (function () {
    function LOGGER_SERVICE_CONFIG(Level, IsProduction) {
        if (Level === void 0) { Level = 0; }
        if (IsProduction === void 0) { IsProduction = false; }
        this.Level = Level;
        this.IsProduction = IsProduction;
    }
    return LOGGER_SERVICE_CONFIG;
}());
exports.LOGGER_SERVICE_CONFIG = LOGGER_SERVICE_CONFIG;
