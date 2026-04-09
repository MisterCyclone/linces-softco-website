import React from 'react';
import Banner from '../components/Banner/Banner';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import { servicesBanner, heroPicture, softwareDevPicture, saasPicture, webDevPicture, hostingPicture, itsupportPicture, servicesClosingPicture } from '../assets/pages/services_page/servicesImages';
import pageContent from '../sitecontent/servicespage.json';
import { openContactFormState } from '../sitecontent/ContactFormContent';

const ServicesPage: React.FC = () => {

  const servicesHero = pageContent['Hero Section'];
  const bespokeSoftwareSection = pageContent['Bespoke Software Development'];
  const saasDevelopmentSection = pageContent['SaaS Platform Development'];
  const webDevelopmentSection = pageContent['Web Application Development'];
  const hostingSection = pageContent['Hosting and Infrastructure'];
  const itSupportSection = pageContent['IT Support'];
  const servicesClosing = pageContent['Services Closing'];

  return (
    <>
      <Banner image={servicesBanner}/>
      <ContentBlock
        left={{ type: 'text', source: servicesHero, useCard: true }}
        right={{ type: 'img', source: heroPicture, paddingLeft: '5vw', paddingRight: '5vw' }}
        bottomMargin='5vh'
      />
      <div id='bespokesoftware' className='page-anchor'>
        <ContentBlock
          right={{ type: 'text', source: bespokeSoftwareSection, useCard: true }}
          left={{ type: 'img', source: softwareDevPicture, paddingLeft: '1vw', paddingRight: '4vw' }}
          backgroundColor='#F8FAFC'
          topMargin='5vh'
          bottomMargin='5vh'
        />
      </div>
      <div id='saasplatform' className='page-anchor'>
        <ContentBlock
          left={{ type: 'text', source: saasDevelopmentSection, useCard: true }}
          right={{ type: 'img', source: saasPicture, paddingLeft: '5vw', paddingRight: '5vw' }}
          topMargin='5vh'
          bottomMargin='5vh'
        />
      </div>
      <div id='webapplication' className='page-anchor'>
        <ContentBlock
          right={{ type: 'text', source: webDevelopmentSection, useCard: true }}
          left={{ type: 'img', source: webDevPicture, paddingLeft: '3vw', paddingRight: '4vw' }}
          backgroundColor='#F8FAFC'
          topMargin='5vh'
          bottomMargin='5vh'
        />
      </div>
      <div id='hostinginfrastructure' className='page-anchor'>
        <ContentBlock
          left={{ type: 'text', source: hostingSection, useCard: true }}
          right={{ type: 'img', source: hostingPicture, paddingLeft: '7vw', paddingRight: '3vw' }}
          topMargin='5vh'
          bottomMargin='5vh'
        />
      </div>
      <div id='itsupport' className='page-anchor'>
        <ContentBlock
          right={{ type: 'text', source: itSupportSection, useCard: true }}
          left={{ type: 'img', source: itsupportPicture, paddingLeft: '4vw', paddingRight: '7vw' }}
          backgroundColor='#F8FAFC'
          topMargin='5vh'
          bottomMargin='5vh'
        />
      </div>
      <ContentBlock
        left={{ type: 'text', source: servicesClosing, buttons: [{ label: 'Discuss Your Requirements', href: '/contact#contact-form', state: openContactFormState, theme: 'teal', width: '19vw' }] }}
        right={{ type: 'img', source: servicesClosingPicture, paddingLeft: '7vw', paddingRight: '7vw' }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
    </>
  );
};

export default ServicesPage;
