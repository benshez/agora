import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@common/modules/app/filters/translate';
import { DateFormatPipe } from '@common/modules/app/filters/dateFormat';
import { DateAndTimeFormatPipe } from '@common/modules/app/filters/dateAndTimeFormat';
import { TimeFormatPipe } from '@common/modules/app/filters/timeFormat';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TranslatePipe,
        DateAndTimeFormatPipe,
        DateFormatPipe,
        TimeFormatPipe,
    ],
    exports: [
        TranslatePipe,
        DateAndTimeFormatPipe,
        DateFormatPipe,
        TimeFormatPipe,
    ],
})

export class AgoraPipeModule {

}
