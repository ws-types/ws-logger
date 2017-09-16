import { ILogger } from 'ws-logger-generic/dist/logger/interfaces';
import { Logger, LOGGER_SERVICE_CONFIG } from 'ws-logger-generic';
export declare class LoggerService implements ILogger {
    private config;
    private generic_logger;
    constructor(config: LOGGER_SERVICE_CONFIG);
    GetLogger: <T>(typeMeta: Function, _module?: string) => Logger<{}>;
    Debug: (msg: any, method_name?: string, module_name?: string) => void;
    Info: (msg: any, method_name?: string, module_name?: string) => void;
    Warn: (msg: any, method_name?: string, module_name?: string) => void;
    Error: (msg: any, method_name?: string, module_name?: string) => void;
}
