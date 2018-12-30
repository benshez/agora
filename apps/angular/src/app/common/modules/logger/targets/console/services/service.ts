import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { IConsole } from '@common/modules/logger/targets/console/interfaces/IConsole';
import { AgoraSnackbarComponent } from '@common/modules/logger/targets/notification/components/component';
import { Config } from '@common/utils/Config';

@Injectable()
export class ConsoleService implements IConsole {
    constructor(
        @Inject(HttpClient) private http?: HttpClient,
        private snackBar?: MatSnackBar) { }

    public log(_m: any): void { return; }
    public debug(_m: any): void { return; }
    public error(_m: any): void { return; }
    public warn(_m: any): void { return; }
    public info(_m: any): void {
        console.info(_m);
        if (this.snackBar) {
            this.snackBar.openFromComponent(AgoraSnackbarComponent, {
                duration: Config.SNACK_BAR_DURATION(),
                data: { message: _m, icon: 'info-circle' }
            });
        }
    }
}
