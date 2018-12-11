import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ISplunk } from '@common/modules/logger/targets/splunk/interfaces/ISplunk';

@Injectable()
export class SplunkService implements ISplunk {

    constructor(@Inject(HttpClient) private http: HttpClient) { }
    public log(_m: any): void { return; }
    public debug(_m: any): void { return; }
    public error(_m: any): void { return; }
    public warn(_m: any): void { return; }
    public info(_m: any) {

        let data: any = { "time": new Date().getTime(), "sourcetype": "my_test", "index": "agora_error", "event": { "myfield": "good" } };

        return this.http.post('/splunk/services/collector', data)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err.message);
                }
            )
    }
}
