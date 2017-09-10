import { LOGGER_SERVICE_CONFIG } from './config';
import { InputMsg, LogType, LogStyle, LogsContainer, ILogger, DefaultLogStyles } from './interfaces';
import { Regex } from 'ws-regex';

export class Logger<T> implements ILogger {

    private _comp: string;
    private _module: string;

    constructor(private config: LOGGER_SERVICE_CONFIG, typeMeta: Function) {
        console.log(typeMeta);
        console.log(Regex.Create(/function (.+?)\(.+/i).Matches(typeMeta.toString(), ['FNCM']));
        this._comp = Regex.Create(/function (.+?)\(.+/i).Matches(typeMeta.toString(), ['FNCM'])['FNCM'];
    }

    public SetModule = <T>(_module: string): Logger<T> => {
        this._module = _module.toUpperCase();
        return this;
    }

    public Debug = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.log(LogType.Debug, msg, method_name, module_name);
    }

    public Info = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.log(LogType.Info, msg, method_name, module_name);
    }

    public Warn = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.log(LogType.Warn, msg, method_name, module_name);
    }

    public Error = (msg: InputMsg, method_name?: string, module_name?: string): void => {
        this.log(LogType.Error, msg, method_name, module_name);
    }

    private log = (type: LogType, msg: InputMsg, method_name?: string, module_name?: string): void => {
        if (this.config.Level > type) { return; }
        const typeStr =
            type === LogType.Debug ? 'DEBUG' :
                type === LogType.Info ? 'INFO' :
                    type === LogType.Warn ? 'WARN' :
                        'ERROR';
        let [param01, param02, param03]: [string, any, any] = [null, null, null];
        const styles: LogStyle = DefaultLogStyles[type];
        if (msg instanceof Array) {
            param01 = msg[0];
            param03 = msg[1];
            if (msg.length > 2) {
                param02 = msg[1];
                param03 = msg[2];
            }
        } else if (typeof (msg) === 'string') {
            param01 = msg;
        } else {
            param03 = msg;
        }
        const container: LogsContainer = {
            format: this.config.IsProduction ?
                `%c ${typeStr}-> \n%c${param01 || 'No message recorded.'}\n` :
                `%c ${typeStr}-> \n%c${param01 || 'No message recorded.'}\n` +
                `%c=>[${module_name || this._module.toUpperCase() || 'MODULE'}]-[${this._comp || 'WHERE'}]-[${method_name || 'METHOD'}]\n` +
                `%c${param02 || 'no descriptions.'}\n`,
            obj: param03,
            styles: this.config.IsProduction ?
                [styles.icon, styles.msg] :
                [styles.icon, styles.msg, styles.route, styles.descrb],
        };
        return printLogs(container);
    }

}

const printLogs = (contr: LogsContainer): void => {
    const coll: any[] = [contr.format, ...contr.styles];
    if (contr.obj) { coll.push(contr.obj); }
    console.log(...coll, '\n-------------\n' + new Date().toLocaleTimeString() + '\n-');
};