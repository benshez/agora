import { Pipe, PipeTransform } from '@angular/core';

import { I18NService } from '@common/modules/i18n/services';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(public service: I18NService) { }

    transform(value: string): string {
        if (!value) return `${value} not found in current translation file.`;

        return this.service.transform(value);
    }

}
