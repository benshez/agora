import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { MenuComponent } from './component';
import { IAppRoute } from '../../../../common/utils/interfaces/IAppRoute';

@Component({
    selector: 'agora-menu-item',
    template: ``
})
class MockagoraMenuItemComponent {
    @Input()
    item: IAppRoute;
}

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuComponent, MockagoraMenuItemComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('menu items', () => {
        it('should render 2 items', () => {
            component.items = [
                {
                    url: '/home',
                    name: 'home',
                    description: 'menu.home'
                },
                {
                    url: '/about',
                    name: 'about',
                    description: 'menu.about'
                },
                {
                    url: '/login',
                    name: 'login',
                    description: 'menu.login'
                }
            ];
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const menuItems = fixture.debugElement.queryAll(
                    By.css('agora-menu-item')
                );
                expect(menuItems.length).toBe(2);
            });
        });
    });
});
