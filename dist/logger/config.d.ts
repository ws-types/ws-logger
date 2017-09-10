import { LogStyle } from './../logger/interfaces';
export declare class LOGGER_SERVICE_CONFIG {
    Level: number;
    IsProduction: boolean;
    styles: LogStyle[];
    constructor(Level?: number, IsProduction?: boolean);
}
