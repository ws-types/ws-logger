"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Warn"] = 2] = "Warn";
    LogType[LogType["Error"] = 3] = "Error";
})(LogType = exports.LogType || (exports.LogType = {}));
exports.DefaultLogStyles = [
    {
        icon: "background-color:#3eb370;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#a4e2c6;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    },
    {
        icon: "background-color:#4c6cb3;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#a1afc9;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    }, {
        icon: "background-color:#ffa500;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#f5e56b;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    },
    {
        icon: "background-color:#c93756;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#ffb3a7;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    }
];
