import { ILogger } from 'ws-logger-generic/dist/logger/interfaces';
import { Logger, LOGGER_SERVICE_CONFIG } from 'ws-logger-generic';
export declare class LoggerService implements ILogger {
    private config;
    private generic_logger;
    constructor(config: LOGGER_SERVICE_CONFIG);
    readonly GetLogger: <T>(typeMeta: Function, _module?: string) => Logger<{}>;
    readonly SetConfig: (config: LOGGER_SERVICE_CONFIG) => void;
    readonly Debug: (msg: any, method_name?: string, module_name?: string) => void;
    readonly Info: (msg: any, method_name?: string, module_name?: string) => void;
    readonly Warn: (msg: any, method_name?: string, module_name?: string) => void;
    readonly Error: (msg: any, method_name?: string, module_name?: string) => void;
}
