import { TestBed } from '@angular/core/testing';
import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContactUsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  

});
