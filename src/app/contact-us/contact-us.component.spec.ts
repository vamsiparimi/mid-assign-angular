import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; // Ensure CommonModule is imported here
import { RouterTestingModule } from '@angular/router/testing';
import { ContactUsComponent } from './contact-us.component';
import { ContactService } from '../contact.service';
import { By } from '@angular/platform-browser';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let contactService: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    const contactServiceSpy = jasmine.createSpyObj('ContactService', ['sendContactEmail']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ContactUsComponent],
      providers: [{ provide: ContactService, useValue: contactServiceSpy }]
    }).compileComponents();

    contactService = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendEmail method with valid form data', () => {
    contactService.sendContactEmail.and.returnValue(Promise.resolve({ success: true, message: 'Email sent successfully' }));

    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Course Inquiry',
      message: 'I am interested in your course.'
    };

    fixture.detectChanges();

    component.sendEmail();

    expect(contactService.sendContactEmail).toHaveBeenCalledWith(component.formData);
  });

  it('should show error message if sendEmail fails', async () => {
    contactService.sendContactEmail.and.returnValue(Promise.reject('Error sending email'));

    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Course Inquiry',
      message: 'I am interested in your course.'
    };

    fixture.detectChanges();

    component.sendEmail();
    await fixture.whenStable();

    expect(component.message).toBe('There was an error sending your message. Please try again.');
  });

  it('should reset form data after successful submission', async () => {
    contactService.sendContactEmail.and.returnValue(Promise.resolve({ success: true, message: 'Email sent successfully' }));

    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Course Inquiry',
      message: 'I am interested in your course.'
    };

    fixture.detectChanges();

    component.sendEmail();
    await fixture.whenStable();

    expect(component.formData.name).toBe('');
    expect(component.formData.email).toBe('');
    expect(component.formData.subject).toBe('');
    expect(component.formData.message).toBe('');
  });

  it('should display success message when email is sent successfully', async () => {
    contactService.sendContactEmail.and.returnValue(Promise.resolve({ success: true, message: 'Email sent successfully' }));
  
    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Course Inquiry',
      message: 'I am interested in your course.'
    };
  
    fixture.detectChanges();
    component.sendEmail();
    await fixture.whenStable();
  
    fixture.detectChanges(); // Ensure the view is updated after async operations
  
    const messageElement = fixture.debugElement.query(By.css('p'));
    expect(messageElement).not.toBeNull(); // Ensure the element exists
    expect(messageElement.nativeElement.textContent).toContain('Email sent successfully');
  });

});
