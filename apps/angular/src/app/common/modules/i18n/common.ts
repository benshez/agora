import { CommonModule } from '@angular/common';
import { I18NComponent } from '@common/modules/i18n/components/component';
import { I18NService } from '@common/modules/i18n/services';
import { WindowService } from '@common/services/window/service';
import { MaterialModule } from '@shared/modules/material/module';

export const I18N_COMPONENT_DECLARATIONS: Array<any> = [I18NComponent];

export const I18N_COMPONENT_IMPORTS: Array<any> = [CommonModule, MaterialModule];

export const I18N_COMPONENT_EXPORTS: Array<any> = [I18NComponent];

export const I18N_PROVIDERS: Array<any> = [I18NService, WindowService];

