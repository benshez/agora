import { CommonModule } from '@angular/common';

import { MenuComponent } from '@components/menu/components/menu/component';
import { MenuItemComponent } from '@components/menu/components/menu-item/component';

export const COMPONENT_MODULES: any = [CommonModule];

export const COMPONENT_DECLARATIONS: Array<any> = [MenuComponent, MenuItemComponent];

export const COMPONENT_EXPORTS: Array<any> = [MenuComponent];
