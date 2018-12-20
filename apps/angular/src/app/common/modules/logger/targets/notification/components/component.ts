import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';


@Component({
    moduleId: module.id,
    selector: 'agora-snackbar',
    templateUrl: 'component.html'
})
export class AgoraSnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}

