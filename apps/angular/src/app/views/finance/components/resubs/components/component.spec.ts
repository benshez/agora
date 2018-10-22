import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { ReSubmissionsComponent } from './component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('AboutComponent', () => {
    let component: ReSubmissionsComponent;
    let fixture: ComponentFixture<ReSubmissionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReSubmissionsComponent, MockTranslatePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReSubmissionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Resubmissions title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title'))
            .nativeElement;
        expect(titleEl.innerText).toEqual('resubs.title');
    });

    it('should render the Resubmissions description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description'))
            .nativeElement;
        expect(descriptionEl.innerText).toEqual('resubs.description');
    });
});
