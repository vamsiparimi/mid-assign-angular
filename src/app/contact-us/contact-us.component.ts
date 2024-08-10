import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  message: string | null = null;

  constructor(private contactService: ContactService) { }

  sendEmail(): void {
    this.contactService.sendContactEmail(this.formData)
      .then(response => {
        this.message = response.message;
        if (response.success) {
          alert('Message has been sent successfully!');
          this.formData = { name: '', email: '', subject: '', message: '' };
        }
      })
      .catch(error => {
        this.message = 'There was an error sending your message. Please try again.';
        alert('There was an error sending your message. Please try again.');
      });
  }
}
