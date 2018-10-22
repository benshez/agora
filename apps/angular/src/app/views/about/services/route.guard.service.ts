import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AboutRouteGuardService implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        return true;
    }
}
