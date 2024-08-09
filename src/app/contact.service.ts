import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceId = 'service_jbxrbj8';
  private templateId = 'template_7527ish';
  private userId = 'WVPKBIgyfcj6EY8PI';

  sendContactEmail(formData: any): Promise<any> {
    const templateParams = {
      from_name: 'Ascendion',
      to_name: formData.name,
      from_email: 'vamsiasce@gmail.comm', 
      to_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    return emailjs.send(this.serviceId, this.templateId, templateParams, this.userId)
      .then(response => ({
        success: true,
        message: 'Your message has been sent successfully.'
      }))
      .catch(error => {
        console.error('Error sending email:', error);
        return {
          success: false,
          message: 'There was an error sending your message. Please try again.'
        };
      });
  }
}
