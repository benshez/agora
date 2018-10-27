import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/modules/material/module';

import { COMMON_SERVICES } from '@common/common';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule, FormsModule, MaterialModule],
    providers: [...COMMON_SERVICES]
})
export class AgoraCommonModule { }
