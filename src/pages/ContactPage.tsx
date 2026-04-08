import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import contactBanner from '../assets/pages/contact_page/contact_banner.png';
import pageContent from '../sitecontent/contactpage.json';
import { openContactFormState } from '../sitecontent/ContactFormContent';
import contactIntroPicture from '../assets/pages/contact_page/contactintro_picture.png';
import requestInfoPicture from '../assets/pages/contact_page/requestinfo_picture.png';
import closingPicture from '../assets/pages/contact_page/reliablesoftware_picture.png';


const ContactPage: React.FC = () => {

  // Tools for managing the contact forms open/close logic
  const location = useLocation();
  const navigate = useNavigate();
  const isFormOpen = (location.state as { openForm?: boolean } | null)?.openForm === true;

  const heroSection = pageContent['Hero Section'];
  const requestInfoSection = pageContent['Request Information'];
  const closingSection = pageContent['Closing Section'];
  const callToActionSection = pageContent['Call to Action'];

  return (
    <>
      <Banner image={contactBanner} />
      <ContentBlock
        left={{ type: 'text', source: heroSection, useCard: true }}
        right={{ type: 'img', source: contactIntroPicture, paddingLeft: '5vw', paddingRight: '5vw'}}
        bottomMargin='5vh'
      />
      <ContentBlock
        right={{ type: 'text', source: requestInfoSection, useCard: true }}
        left={{ type: 'img', source: requestInfoPicture, paddingLeft: '3vw', paddingRight: '4vw' }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <ContentBlock
        left={{ type: 'text', source: closingSection, useCard: true }}
        right={{ type: 'img', source: closingPicture, paddingLeft: '4vw', paddingRight: '4vw' }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <ContentBlock
        left={{ type: 'text', source: callToActionSection, centerHeader: true, width: '41vw', buttonWidth: '19vw', decapitalizeHeader: true,
          buttons: [{ label: 'Submit an Enquiry', href: '/contact#contact-form', state: openContactFormState, theme: 'teal' }, 
                    { label: 'Explore Velocity Enterprise', href: '/velocity-enterprise', theme: 'purple' }] 
        }}
        topMargin='5vh'
        bottomMargin='5vh'
        backgroundColor='#F8FAFC'
        bottomSeperatorLine
      />
      <div id='contact-form' className='page-anchor'>
        {isFormOpen && <ContactForm onClose={() => navigate('/contact', { replace: true, state: null })} />}
      </div>
    </>
  );
};

export default ContactPage;
