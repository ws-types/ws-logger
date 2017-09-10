"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
var ws_regex_1 = require("ws-regex");
var Logger = /** @class */ (function () {
    function Logger(config, typeMeta) {
        var _this = this;
        this.config = config;
        this.SetModule = function (_module) {
            _this._module = _module.toUpperCase();
            return _this;
        };
        this.Debug = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Debug, msg, method_name, module_name);
        };
        this.Info = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Info, msg, method_name, module_name);
        };
        this.Warn = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Warn, msg, method_name, module_name);
        };
        this.Error = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Error, msg, method_name, module_name);
        };
        this.log = function (type, msg, method_name, module_name) {
            if (_this.config.Level > type) {
                return;
            }
            var typeStr = type === interfaces_1.LogType.Debug ? 'DEBUG' :
                type === interfaces_1.LogType.Info ? 'INFO' :
                    type === interfaces_1.LogType.Warn ? 'WARN' :
                        'ERROR';
            var _a = [null, null, null], param01 = _a[0], param02 = _a[1], param03 = _a[2];
            var styles = interfaces_1.DefaultLogStyles[type];
            if (msg instanceof Array) {
                param01 = msg[0];
                param03 = msg[1];
                if (msg.length > 2) {
                    param02 = msg[1];
                    param03 = msg[2];
                }
            }
            else if (typeof (msg) === 'string') {
                param01 = msg;
            }
            else {
                param03 = msg;
            }
            var container = {
                format: _this.config.IsProduction ?
                    "%c " + typeStr + "-> \n%c" + (param01 || 'No message recorded.') + "\n" :
                    "%c " + typeStr + "-> \n%c" + (param01 || 'No message recorded.') + "\n" +
                        ("%c=>[" + (module_name || _this._module.toUpperCase() || 'MODULE') + "]-[" + (_this._comp || 'WHERE') + "]-[" + (method_name || 'METHOD') + "]\n") +
                        ("%c" + (param02 || 'no descriptions.') + "\n"),
                obj: param03,
                styles: _this.config.IsProduction ?
                    [styles.icon, styles.msg] :
                    [styles.icon, styles.msg, styles.route, styles.descrb],
            };
            return printLogs(container);
        };
        console.log(typeMeta);
        console.log(ws_regex_1.Regex.Create(/function (.+?)\(.+/i).Matches(typeMeta.toString(), ['FNCM']));
        this._comp = ws_regex_1.Regex.Create(/function (.+?)\(.+/i).Matches(typeMeta.toString(), ['FNCM'])['FNCM'];
    }
    return Logger;
}());
exports.Logger = Logger;
var printLogs = function (contr) {
    var coll = [contr.format].concat(contr.styles);
    if (contr.obj) {
        coll.push(contr.obj);
    }
    console.log.apply(console, coll.concat(['\n-------------\n' + new Date().toLocaleTimeString() + '\n-']));
};
