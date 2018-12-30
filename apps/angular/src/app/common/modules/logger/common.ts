import { MaterialModule } from '@shared/modules/material/module';

import { AgoraSnackbarComponent } from '@common/modules/logger/targets/notification/components/component';
import { LogService } from '@common/modules/logger/services/service';
import { NotificationService } from '@common/modules/logger/targets/notification/services/service';

export const LOGGER_COMPONENT_DECLARATIONS: Array<any> = [AgoraSnackbarComponent];

export const LOGGER_COMPONENT_IMPORTS: Array<any> = [MaterialModule];

export const LOGGER_COMPONENT_EXPORTS: Array<any> = [AgoraSnackbarComponent];

export const LOGGER_PROVIDERS: Array<any> = [LogService, NotificationService];

