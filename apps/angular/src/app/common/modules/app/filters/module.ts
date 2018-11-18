import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    TranslatePipe,
    DateFormatPipe,
    DateTimeFormatPipe
} from '@common/index';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TranslatePipe,
        DateFormatPipe,
        DateTimeFormatPipe
    ],
    exports: [
        TranslatePipe,
        DateFormatPipe,
        DateTimeFormatPipe
    ],
})

export class AgoraPipeModule {

}
