import { LogTarget } from '@common/modules/logger/classes/LogTarget';
import { ConsoleService } from '@common/modules/logger/targets/console/services/service';
import { ConsoleTarget } from '@common/modules/logger/targets/console/classes/ConsoleTarget';
import { ELogLevel } from '@common/modules/logger/enums/ELogLevel';
import { reducers, metaReducers } from '@common/modules/app/store';
import { I18NEffects } from '@common/modules/i18n/utilities/common';
import { TranslatePipe } from '@common/modules/app/filters/translate';
import { DateFormatPipe } from '@common/modules/app/filters/dateFormat';
import { DateTimeFormatPipe } from '@common/modules/app/filters/datetimeFormat';
import { TimeFormatPipe } from '@common/modules/app/filters/timeFormat';
import { AgoraLoggerModule } from '@common/modules/logger/module';
import { en, af } from '@common/modules/i18n/languages/index';
import { LogService } from '@common/modules/logger/services/service';

export {
    LogTarget,
    ConsoleService,
    ConsoleTarget,
    ELogLevel,
    reducers,
    metaReducers,
    I18NEffects,
    TranslatePipe,
    DateFormatPipe,
    DateTimeFormatPipe,
    TimeFormatPipe,
    AgoraLoggerModule,
    en,
    af,
    LogService
}
