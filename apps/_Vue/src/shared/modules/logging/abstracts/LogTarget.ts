import { ILogEvent } from '../';

export abstract class LogTarget {
    abstract log(event: ILogEvent): Promise<any>;
}