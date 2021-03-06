import { CommonModule } from '@angular/common';

import { MenuComponent } from '@components/menu/components/menu/component';
import { MenuItemComponent } from '@components/menu/components/menu-item/component';
import { AgoraPipeModule } from '@common/modules/app/filters/module';
import { MaterialModule } from '@shared/modules/material/module';

export const COMPONENT_MODULES: any = [CommonModule, AgoraPipeModule, MaterialModule];

export const COMPONENT_DECLARATIONS: Array<any> = [MenuComponent, MenuItemComponent];

export const COMPONENT_EXPORTS: Array<any> = [MenuComponent];

export const COMPONENT_PROVIDERS: Array<any> = [];
