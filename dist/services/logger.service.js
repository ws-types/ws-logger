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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ws_logger_generic_1 = require("ws-logger-generic");
var LoggerService = /** @class */ (function () {
    function LoggerService(config) {
        var _this = this;
        this.config = config;
        this.GetLogger = function (typeMeta, _module) {
            return new ws_logger_generic_1.Logger(_this.config, typeMeta).SetModule(_module || 'Module');
        };
        this.Debug = function (msg, method_name, module_name) {
            _this.generic_logger.Debug(msg, method_name, module_name);
        };
        this.Info = function (msg, method_name, module_name) {
            _this.generic_logger.Info(msg, method_name, module_name);
        };
        this.Warn = function (msg, method_name, module_name) {
            _this.generic_logger.Warn(msg, method_name, module_name);
        };
        this.Error = function (msg, method_name, module_name) {
            _this.generic_logger.Error(msg, method_name, module_name);
        };
        this.generic_logger = this.GetLogger(LoggerService_1).SetModule('None');
    }
    LoggerService_1 = LoggerService;
    LoggerService = LoggerService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ws_logger_generic_1.LOGGER_SERVICE_CONFIG])
    ], LoggerService);
    return LoggerService;
    var LoggerService_1;
}());
exports.LoggerService = LoggerService;
