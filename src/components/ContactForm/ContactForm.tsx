// Import react and styling
import React, { useState } from 'react';
import './ContactForm.css';
import { Button } from 'primereact/button';
import { addressCard, contactAltWaysTitle, contactFormTitle, linkedinCard, sideContactCards } from '../../sitecontent/ContactFormContent';

type contactFormProps = {
  onClose: () => void;
};

type formData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC<contactFormProps> = ({ onClose }) => {

  // useState to hold user form data
  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // useState to handle loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes for all form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(input => ({ ...input, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check to see if form is fully filled out before sending to API
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError('All fields are required');
        return;
      }

      //Check to see if email is valid using a simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success - reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='contact-form-structure'>
      <div className='contact-form-card'>
        <h1 className='contact-form-title'>{contactFormTitle}</h1>
        
        <div className='contact-form-row'>
          <input 
            className='contact-form-input' 
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <input 
            className='contact-form-input' 
            placeholder='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <input 
          className='contact-form-input' 
          placeholder='Subject'
          name='subject'
          value={formData.subject}
          onChange={handleInputChange}
        />
        <textarea 
          className='contact-form-input' 
          placeholder='Message' 
          name='message'
          rows={1}
          value={formData.message}
          onChange={handleInputChange}
        />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div className='contact-form-row'>
          <Button 
            label='Send Message' 
            className='contact-form-submit-button'
            onClick={handleSubmit}
            loading={isLoading}
          />
        </div>
        
        <h1 className='contact-form-subtitle'>{contactAltWaysTitle}</h1>
        
        <div className='contact-form-minicard-structure'>
          <div className='contact-form-minicard-section'>
            <div className='contact-form-details-grid'>

              {/* Address Mini-card */}
              <div className='contact-form-minicard-address'>
                <h2 className='contact-form-minicard-title'>
                  <div className={`${addressCard.icon} contact-form-minicard-icon`} /> {addressCard.title}
                </h2>
                {addressCard.lines.map((line) => ( <p key={line} className='contact-form-minicard-text'>{line}</p>))}
              </div>

              {/* Email and Phone Mini-cards */}
              <div className='contact-form-side-stack'>
                {sideContactCards.map((card) => (
                  <a key={card.title} className='contact-form-minicard' href={card.href} target={card.target} rel={card.rel}>
                    <h2 className='contact-form-minicard-title'>
                    <div className={`${card.icon} contact-form-minicard-icon`} /> {card.title}
                    </h2>
                    <p className='contact-form-minicard-text'>{card.lines[0]}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* LinkedIn Mini-card */}
            <a className='contact-form-minicard below-grid' href={linkedinCard.href} target={linkedinCard.target} rel={linkedinCard.rel}>
              <h2 className='contact-form-minicard-title'>
                <div className={`${linkedinCard.icon} contact-form-minicard-icon`} /> {linkedinCard.title}
              </h2>
              <p className='contact-form-minicard-link'>{linkedinCard.lines[0]}</p>
            </a>
          </div>
        </div>

        <div className='contact-form-row'>
          <Button label='Close Form' className='contact-form-submit-button' onClick={onClose}/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;