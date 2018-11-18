import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';

export interface ILogEvent {
    message: string | Object;
    level: ELogLevel;
}
