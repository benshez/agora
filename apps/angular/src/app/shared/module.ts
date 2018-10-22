import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/modules/material/module';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule, FormsModule, MaterialModule]
})
export class SharedModule { }
