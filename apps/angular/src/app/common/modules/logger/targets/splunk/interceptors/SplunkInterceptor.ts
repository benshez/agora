import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Config } from '@common/utils/Config';

@Injectable()
export class SplunkApiInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': `Splunk ${Config.SPLUNK_TOKEN()}`
            }
        });

        return next.handle(request);
    }
}
