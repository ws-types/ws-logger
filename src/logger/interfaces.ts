
/**
 * message | [message, description] | [message, object] | [message, description, object] | object
 */
export type InputMsg = string | [string, string] | [string, any] | [string, string, any] | any;

export enum LogType {
    Debug = 0,
    Info = 1,
    Warn = 2,
    Error = 3
}

export interface ILogger {
    Debug: Function;
    Info: Function;
    Warn: Function;
    Error: Function;
}

export interface LogStyle {
    icon?: string;
    msg?: string;
    descrb?: string;
    route?: string;
    stamp?: string;
}

export interface LogsContainer {
    format: string;
    obj: any;
    styles: string[];
}

export const DefaultLogStyles: LogStyle[] = [
    {
        icon: `background-color:#3eb370;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900`,
        msg: `font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;`,
        route: 'background-color:#a4e2c6;line-height:1.2;',
        descrb: `color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;`,
        stamp: `font-size:0.6em;font-family:'Century Gothic';line-height:1.5;`
    },
    {
        icon: `background-color:#4c6cb3;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900`,
        msg: `font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;`,
        route: 'background-color:#a1afc9;line-height:1.2;',
        descrb: `color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;`,
        stamp: `font-size:0.6em;font-family:'Century Gothic';line-height:1.5;`
    }, {
        icon: `background-color:#ffa500;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900`,
        msg: `font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;`,
        route: 'background-color:#f5e56b;line-height:1.2;',
        descrb: `color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;`,
        stamp: `font-size:0.6em;font-family:'Century Gothic';line-height:1.5;`
    },
    {
        icon: `background-color:#c93756;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900`,
        msg: `font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;`,
        route: 'background-color:#ffb3a7;line-height:1.2;',
        descrb: `color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;`,
        stamp: `font-size:0.6em;font-family:'Century Gothic';line-height:1.5;`
    }
];