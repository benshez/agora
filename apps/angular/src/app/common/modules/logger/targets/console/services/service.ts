import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { IConsole } from '@common/modules/logger/targets/console/interfaces/IConsole';

@Injectable()
export class ConsoleService implements IConsole {
    constructor(
        @Inject(HttpClient) private http: HttpClient,
        private snackBar: MatSnackBar) { }

    public log(_m: any): void { return; }
    public debug(_m: any): void { return; }
    public error(_m: any): void { return; }
    public warn(_m: any): void { return; }
    public info(_m: any): void { console.info(_m);
            this.snackBar.open(_m, '', {
            duration: 2000,
        });
    }
}
