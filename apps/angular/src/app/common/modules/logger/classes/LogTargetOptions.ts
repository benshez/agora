import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';

export abstract class LogTargetOptions {
    minLogLevel: ELogLevel;
}
