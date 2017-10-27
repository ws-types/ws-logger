import { Injectable } from '@angular/core';
import { InputMsg, ILogger } from 'ws-logger-generic/dist/logger/interfaces';
import { Logger, LOGGER_SERVICE_CONFIG } from 'ws-logger-generic';

@Injectable()
export class LoggerService implements ILogger {

    private generic_logger: Logger<LoggerService>;

    constructor(private config: LOGGER_SERVICE_CONFIG) {
        this.generic_logger = this.GetLogger<LoggerService>('LoggerService').SetModule('Default');
    }

    public readonly GetLogger = <T>(typeMeta: Function | string, _module?: string) => {
        return new Logger<T>(this.config, typeMeta).SetModule(_module || 'Module');
    }

    public readonly SetConfig = (config: LOGGER_SERVICE_CONFIG): void => {
        this.config = config;
    }

    public readonly Debug = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Debug(msg, method_name, module_name);
    }

    public readonly Info = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Info(msg, method_name, module_name);
    }


    public readonly Warn = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Warn(msg, method_name, module_name);
    }

    public readonly Error = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Error(msg, method_name, module_name);
    }

}
