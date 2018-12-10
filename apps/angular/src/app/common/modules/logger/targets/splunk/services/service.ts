import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ISplunk } from '@common/modules/logger/targets/splunk/interfaces/ISplunk';

@Injectable()
export class SplunkService implements ISplunk {

    private options: any = {};
    //private http: HttpClient;

    constructor(@Inject(HttpClient) private http: HttpClient) { debugger }
    public log(_m: any): void { debugger; return; }
    public debug(_m: any): void { debugger; return; }
    public error(_m: any): void { debugger; return; }
    public warn(_m: any): void { debugger; return; }
    public info(_m: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Splunk 8328e4ff-31b4-4dc7-822d-595b30b7d386'
            })
        };


        //this.http = new HttpClient();
        let data: any = { "time": 1459241926.498019000, "sourcetype": "my_test", "index": "agora_error", "event": { "myfield": "good" } };
        debugger
        return this.http.post('/splunk/services/collector', data, httpOptions)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err.message);
                }
            )
        //Splunk 8328e4ff-31b4-4dc7-822d-595b30b7d386
        // {"time":1459241926.498019000,"sourcetype":"my_test","index":"agora_error","event":{"myfield":"good"}}

        //let result = source.search(subString);
        //return result > -1;
    }
    // public info(_m: any) {
    //         debugger
    //     return 'ggg';
    // }
}
