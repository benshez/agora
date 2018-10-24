import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(<HttpClient>http, './assets/i18n/', '.json');
    //return new TranslateHttpLoader(http);
}
