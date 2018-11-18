import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Config } from '@common/utils/Config';

@Pipe({
    name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, Config.DATE_TIME_FMT());
    }
}
