import { ILogger } from './../logger/interfaces';
import { LOGGER_SERVICE_CONFIG } from './../logger/config';
import { Logger } from './../logger/logger';
import { Injectable } from '@angular/core';
import { InputMsg } from '../logger/interfaces';

@Injectable()
export class LoggerService implements ILogger {

    private generic_logger: Logger<LoggerService>;

    constructor(private config: LOGGER_SERVICE_CONFIG) {
        this.generic_logger = this.GetLogger<LoggerService>(LoggerService).SetModule('None');
    }

    public GetLogger = <T>(typeMeta: Function, _module?: string) => {
        return new Logger<T>(this.config, typeMeta).SetModule(_module || 'Module');
    }

    public Debug = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Debug(msg, method_name, module_name);
    }

    public Info = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Info(msg, method_name, module_name);
    }


    public Warn = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Warn(msg, method_name, module_name);
    }

    public Error = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.generic_logger.Error(msg, method_name, module_name);
    }

}