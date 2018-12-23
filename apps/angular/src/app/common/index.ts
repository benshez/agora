import { LogTarget } from '@common/modules/logger/classes/LogTarget';
import { LogTargetBase } from '@common/modules/logger/classes/LogTargetBase';
import { LogTargetOptions } from '@common/modules/logger/classes/LogTargetOptions';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { WindowService } from '@common/modules/logger/targets/window/services/service';
import { ILogEvent } from '@common/modules/logger/interfaces/ILogEvent';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { I18NEffects } from '@common/modules/i18n/utilities/common';
import { TranslatePipe } from '@common/modules/app/filters/translate';
import { DateFormatPipe } from '@common/modules/app/filters/dateFormat';
import { TimeFormatPipe } from '@common/modules/app/filters/timeFormat';
import { AgoraLoggerModule } from '@common/modules/logger/module';
import { en, af } from '@common/modules/i18n/languages/index';
import { LogService } from '@common/modules/logger/services/service';
import { Config } from '@common/utils/Config';
import { ISnack } from '@common/modules/logger/targets/notification/interfaces/ISnack';
import { ISnackData } from '@common/modules/logger/targets/notification/interfaces/ISnackData';
import { AgoraSnackbarComponent } from '@common/modules/logger/targets/notification/components/component';
import { NotificationService } from '@common/modules/logger/targets/notification/services/service';

export {
    LogTarget,
    LogTargetBase,
    LogTargetOptions,
    ConsoleService,
    WindowService,
    ILogEvent,
    ELogLevel,
    I18NEffects,
    TranslatePipe,
    DateFormatPipe,
    TimeFormatPipe,
    AgoraLoggerModule,
    en,
    af,
    LogService,
    Config,
    ISnack,
    ISnackData,
    AgoraSnackbarComponent,
    NotificationService
}
