import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Config } from '@common/utils/Config';

@Pipe({
    name: 'timeFormat'
})
export class TimeFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, Config.TIME_FMT_HH_MM_SS());
    }
}
