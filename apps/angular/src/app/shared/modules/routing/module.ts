import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from '@shared/modules/routing/routes';

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
