import { LOGGER_SERVICE_CONFIG } from './config';
import { ILogger } from './interfaces';
export declare class Logger<T> implements ILogger {
    private config;
    private _comp;
    private _module;
    constructor(config: LOGGER_SERVICE_CONFIG, typeMeta: Function);
    SetModule: <T>(_module: string) => Logger<T>;
    Debug: (msg: any, method_name?: string, module_name?: string) => void;
    Info: (msg: any, method_name?: string, module_name?: string) => void;
    Warn: (msg: any, method_name?: string, module_name?: string) => void;
    Error: (msg: any, method_name?: string, module_name?: string) => void;
    private log;
}
