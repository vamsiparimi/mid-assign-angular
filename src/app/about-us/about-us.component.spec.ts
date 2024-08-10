import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component';
import { By } from '@angular/platform-browser';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header content correctly', () => {
    const headerElement = fixture.debugElement.query(By.css('header')).nativeElement;
    expect(headerElement.querySelector('h1').textContent).toContain('About Us');
    expect(headerElement.querySelector('p').textContent).toContain('Learn more about our company and team.');
  });

  it('should render mission section content correctly', () => {
    const missionElement = fixture.debugElement.query(By.css('.mission')).nativeElement;
    expect(missionElement.querySelector('h2').textContent).toContain('Our Mission');
    expect(missionElement.querySelector('p').textContent).toContain('At Forbes, our mission is to deliver the most trusted information and insights for business leaders, entrepreneurs, and decision-makers around the globe.');
  });

  it('should render history section content correctly', () => {
    const historyElement = fixture.debugElement.query(By.css('.history')).nativeElement;
    expect(historyElement.querySelector('h2').textContent).toContain('Our History');
    expect(historyElement.querySelector('p').textContent).toContain('Forbes has been a leading voice in business and financial journalism for over a century. Our history is marked by innovation, leadership, and a commitment to excellence.');
  });

  it('should render team members correctly', () => {
    const teamMembers = fixture.debugElement.queryAll(By.css('.team-member'));
    expect(teamMembers.length).toBeGreaterThan(0); // Ensure at least one team member is rendered

    // Example for the second team member (Taha Ahmed)
    const secondMember = teamMembers[1].nativeElement;
    expect(secondMember.querySelector('h3').textContent).toContain('Taha Ahmed');
    expect(secondMember.querySelector('p').textContent).toContain('CGO');
  });

  it('should render footer content correctly', () => {
    const footerElement = fixture.debugElement.query(By.css('footer')).nativeElement;
    expect(footerElement.querySelector('p').textContent).toContain('© 2024 Forbes. All rights reserved.');
  });
});
