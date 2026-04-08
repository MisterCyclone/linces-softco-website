// Import react and styling
import React from 'react';
import './ContactForm.css';

// Import primereact components
import { Button } from 'primereact/button';

// Import content
import { addressCard, contactAltWaysTitle, contactFormTitle, linkedinCard, sideContactCards } from '../../sitecontent/ContactFormContent';

// Manages open/close logic
type contactFormProps = {
  onClose: () => void;
};

const ContactForm: React.FC<contactFormProps> = ({ onClose }) => {

  return (
    <div className='contact-form-structure'>
      <div className='contact-form-card'>
        <h1 className='contact-form-title'>{contactFormTitle}</h1>
        <div className='contact-form-row'>
          <input className='contact-form-input' placeholder='Name' />
          <input className='contact-form-input' placeholder='Email' />
        </div>
        <input className='contact-form-input' placeholder='Subject' />
        <textarea className='contact-form-input' placeholder='Message' rows={1} />
        <div className='contact-form-row'>
          <Button label='Send Message' className='contact-form-submit-button'/>
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