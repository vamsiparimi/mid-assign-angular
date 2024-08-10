import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let menuIcon: DebugElement;
  let menuList: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeaderComponent], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    menuList = fixture.debugElement.query(By.css('ul'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu visibility when menu icon is clicked', () => {
    expect(component.menuOpen).toBeFalse();
    menuIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.menuOpen).toBeTrue();
    expect(menuList.nativeElement.classList).toContain('show-menu');
    menuIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.menuOpen).toBeFalse();
    expect(menuList.nativeElement.classList).not.toContain('show-menu');
  });

  it('should render navigation links with correct routerLinks', () => {
    const links = fixture.debugElement.queryAll(By.css('ul li a'));
    expect(links.length).toBe(5);
    const expectedLinks = [
      '/',
      '/aboutus',
      '/products',
      '/contactus',
      '/signup'
    ];
    links.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
  });

  it('should correctly set class based on menuOpen state', () => {
    component.menuOpen = true;
    fixture.detectChanges();
    expect(menuList.nativeElement.classList).toContain('show-menu');
    component.menuOpen = false;
    fixture.detectChanges();
    expect(menuList.nativeElement.classList).not.toContain('show-menu');
  });
});
