import { LogStyle } from './../logger/interfaces';

// tslint:disable-next-line:class-name
export class LOGGER_SERVICE_CONFIG {
    public styles: LogStyle[];
    constructor(public Level: number = 0, public IsProduction: boolean = false) { }
}
