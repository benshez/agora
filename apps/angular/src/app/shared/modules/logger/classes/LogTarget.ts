import { ILogEvent } from '@shared/modules/logger/interfaces/ILogEvent';

export abstract class LogTarget {
    abstract log(event: ILogEvent): Promise<any>;
}
