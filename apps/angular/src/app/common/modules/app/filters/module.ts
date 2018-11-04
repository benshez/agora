import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@common/modules/app/filters/translate';

@NgModule({
    imports: [CommonModule],
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
})

export class AgoraPipeModule {

}
