/**
 * message | [message, description] | [message, object] | [message, description, object] | object
 */
export declare type InputMsg = string | [string, string] | [string, any] | [string, string, any] | any;
export declare enum LogType {
    Debug = 0,
    Info = 1,
    Warn = 2,
    Error = 3,
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
export declare const DefaultLogStyles: LogStyle[];
