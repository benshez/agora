import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { ClaimsCreateComponent } from './component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('AboutComponent', () => {
    let component: ClaimsCreateComponent;
    let fixture: ComponentFixture<ClaimsCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClaimsCreateComponent, MockTranslatePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClaimsCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Claims title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title'))
            .nativeElement;
        expect(titleEl.innerText).toEqual('claims.title');
    });

    it('should render the Claims description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description'))
            .nativeElement;
        expect(descriptionEl.innerText).toEqual('claims.description');
    });
});
