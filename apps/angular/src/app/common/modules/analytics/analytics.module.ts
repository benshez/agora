import { NgModule } from '@angular/core';
import {
    Angulartics2Module,
    Angulartics2Segment
} from 'angulartics2';
import { AnalyticsService } from './analytics.service';

@NgModule({
    imports: [
        Angulartics2Module.forRoot([
            Angulartics2Segment
        ])
    ],
    providers: [
        AnalyticsService
    ]
})
export class AnalyticsModule { }
