import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MenuComponent } from '@components/menu/components/menu/component';
import { MenuItemComponent } from '@components/menu/components/menu-item/component';

export const COMPONENT_MODULES: any = [CommonModule, TranslateModule];

export const COMPONENT_DECLARATIONS: Array<any> = [MenuComponent, MenuItemComponent];

export const COMPONENT_EXPORTS: Array<any> = [MenuComponent];
