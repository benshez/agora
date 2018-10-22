import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { ChangePaymentsComponent } from './component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('AboutComponent', () => {
    let component: ChangePaymentsComponent;
    let fixture: ComponentFixture<ChangePaymentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChangePaymentsComponent, MockTranslatePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangePaymentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Change Payments title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title'))
            .nativeElement;
        expect(titleEl.innerText).toEqual('changePayments.title');
    });

    it('should render the About description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description'))
            .nativeElement;
        expect(descriptionEl.innerText).toEqual('changePayments.description');
    });
});
