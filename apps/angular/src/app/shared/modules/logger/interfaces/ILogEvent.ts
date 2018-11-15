import { ELogLevel } from '@shared/modules/logger/enums/ELogLevel';

export interface ILogEvent {
    message: string | Object;
    level: ELogLevel;
}
