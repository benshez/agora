import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Config } from '@common/utils/Config';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, Config.DATE_FMT());
    }
}
