import { ILogEvent } from '@shared/modules/logger/interfaces/ILogEvent';
import { LogTarget } from '@shared/modules/logger/classes/LogTarget';
import { LogTargetOptions } from '@shared/modules/logger/classes/LogTargetOptions';

export abstract class LogTargetBase implements LogTarget {

    constructor(protected options: LogTargetOptions) { }

    log(event: ILogEvent): Promise<any> {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    }

    protected abstract writeToLog(event: ILogEvent): Promise<any>;
}
