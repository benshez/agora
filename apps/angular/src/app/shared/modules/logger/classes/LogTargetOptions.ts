import { ELogLevel } from '@shared/modules/logger/enums/ELogLevel';

export abstract class LogTargetOptions {
    minLogLevel: ELogLevel;
}
