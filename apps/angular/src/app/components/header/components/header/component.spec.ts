import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_CONFIG, Config } from '../../../../common/utils/Config';
import { MaterialModule } from '../../../../shared/modules/material/module';
import { TestsModule } from '../../../../shared/modules/tests/tests';
import { HeaderComponent } from './component';
import { ProgressBarService } from '../../../../shared/services/bar/service';

describe('HeaderComponent', () => {
    let fixture;
    let component;
    let progressBarService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestsModule, MaterialModule],
            declarations: [HeaderComponent],
            providers: [
                { provide: APP_CONFIG, useValue: Config },
                ProgressBarService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        component = fixture.debugElement.componentInstance;
        progressBarService = TestBed.get(ProgressBarService);
    }));

    it('should create header component with constructor', () => {
        const instance = new HeaderComponent(
            progressBarService,
        );
        expect(instance).toBeTruthy();
    });

    it('should create header component', () => {
        expect(component).toBeTruthy();
    });

    it('should update progress bar', () => {
        expect(component.progressBarMode).toBeUndefined();
        progressBarService.updateProgressBar$.emit('query');
        expect(component.progressBarMode).toBe('query');
    });

    it('should change language to spanish', () => {
        //expect(component.translateService.currentLang).toBeUndefined();
        // component.changeLanguage('es');
        //expect(component.translateService.currentLang).toBe('es');
    });
});
