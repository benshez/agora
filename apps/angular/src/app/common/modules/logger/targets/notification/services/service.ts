import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AgoraSnackbarComponent } from '@common/modules/logger/targets/notification/components/component';
import { Config, ISnack } from '@common/index';

@Injectable()
export class NotificationService {
    constructor(
        private snackBar: MatSnackBar
    ) { }

    success(snack: ISnack) {
        this.snackBar.openFromComponent(AgoraSnackbarComponent, snack);
        // this.snackBar.openFromComponent(AgoraSnackbarComponent, {
        //     ...snack
        //     //duration: Config.SNACK_BAR_DURATION(),
        //     //data: { message: message, icon: 'info-circle' }
        // });
    }

    error(message: string) {
        this.snackBar.openFromComponent(AgoraSnackbarComponent, {
            duration: Config.SNACK_BAR_DURATION(),
            data: { message: message, icon: 'exclamation-triangle' }
        });
    }
}
