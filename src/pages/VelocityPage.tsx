import React from 'react';
import Banner from '../components/Banner/Banner';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import velocityBanner from '../assets/pages/velocity_page/velocity_banner.png';
import pageContent from '../sitecontent/velocitypage.json';

import velocityLogo from '../assets/pages/velocity_page/velocity_logo_cropped.png';
import heroTwoPicture from '../assets/pages/velocity_page/velocityherotwo_picture.png';
import heroThreePicture from '../assets/pages/velocity_page/velocityherothree_picture.png';
import closingPicture from '../assets/pages/velocity_page/velocityclosing_picture.png';

import customsIcon from '../assets/pages/shared/customs_icon.png';
import transportIcon from '../assets/pages/shared/transport_icon.png';
import unifiedIcon from '../assets/pages/shared/unified_icon.png';
import { openContactFormState } from '../sitecontent/ContactFormContent';

const VelocityPage: React.FC = () => {

  const velocityHeroSectionOne = pageContent['Hero Section One'];
  const velocityHeroSectionTwo = pageContent['Hero Section Two'];
  const velocityHeroSectionThree = pageContent['Hero Section Three'];

  const customsManagementSection = pageContent['Customs Management'];
  const transportManagementSection = pageContent['Transport Management'];
  const unifiedOperationalPlatformSection = pageContent['Unified Operational Platform'];
  const operationalVisibilitySection = pageContent['Operational Visibility and Control'];
  const secureReliableInfrastructureSection = pageContent['Secure and Reliable Infrastructure'];
  const scalableSoftwareArchitectureSection = pageContent['Scalable Software Architecture'];

  const futureSection = pageContent['Future Section'];
  const futureCardOne = pageContent['Future Card One'];
  const futureCardTwo = pageContent['Future Card Two'];
  const futureCardThree = pageContent['Future Card Three'];
  const futureCardFour = pageContent['Future Card Four'];

  const closingSection = pageContent['Velocity Closing'];

  return (
    <>
      <Banner image={velocityBanner} />
      <div id='velocityctdms' className='page-anchor'>
      <ContentBlock
        left={{ type: 'text', source: velocityHeroSectionOne, useCard: true }}
        right={{ type: 'img', source: velocityLogo, paddingLeft: '5vw', paddingRight: '5vw' }}
        bottomMargin='5vh'
      />
      </div>
      <ContentBlock
        left={{ type: 'img', source: heroTwoPicture, paddingLeft: '5vw', paddingRight: '5vw' }}
        right={{ type: 'text', source: velocityHeroSectionTwo, useCard: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <ContentBlock
        left={{ type: 'text', source: velocityHeroSectionThree, useCard: true }}
        right={{ type: 'img', source: heroThreePicture, paddingLeft: '5vw', paddingRight: '3vw' }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <div id='velocityfeatures' className='page-anchor'>
      <ContentBlock
        left={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple', },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
            source: [
              { src: customsIcon, alt: 'Customs Management' },
              { src: transportIcon, alt: 'Transport Management' },
              { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        right={{ type: 'text', source: customsManagementSection, useCard: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
        
      />
      </div>
      <ContentBlock
        right={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
            source: [
              { src: customsIcon, alt: 'Customs Management' },
              { src: transportIcon, alt: 'Transport Management' },
              { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        left={{ type: 'text', source: transportManagementSection, useCard: true }}
        topMargin='5vh'
        bottomMargin='5vh'
        
      />
      <ContentBlock
        left={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
            source: [
              { src: customsIcon, alt: 'Customs Management' },
              { src: transportIcon, alt: 'Transport Management' },
              { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        right={{ type: 'text', source: unifiedOperationalPlatformSection, useCard: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
        
      />
      <ContentBlock
        right={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
          source: [
              { src: customsIcon, alt: 'Customs Management' },
              { src: transportIcon, alt: 'Transport Management' },
              { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        left={{ type: 'text', source: operationalVisibilitySection, useCard: true }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <ContentBlock
        left={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
          source: [
            { src: customsIcon, alt: 'Customs Management' },
            { src: transportIcon, alt: 'Transport Management' },
            { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        right={{ type: 'text', source: secureReliableInfrastructureSection, useCard: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <ContentBlock
        right={{ 
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: { numScroll: 1, circular: true, autoplayInterval: 5000 },
            source: [
              { src: customsIcon, alt: 'Customs Management' },
              { src: transportIcon, alt: 'Transport Management' },
              { src: unifiedIcon, alt: 'Unified Operational Platform' },
          ]
        }}
        left={{ type: 'text', source: scalableSoftwareArchitectureSection, useCard: true }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
      <div id='velocityfuture' className='page-anchor'>
      <ContentBlock
        left={{ type: 'text', source: futureSection, centerHeader: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        topSeperatorLine
      />
      </div>
      <ContentBlock
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        left={{
          type: 'infoCards',
          cardWidth: '33vw',
          cardPaddingTop: '0vh',
          cardGap: '7vw',
          source: [
            {
              topBorderColor: '#AE4FF8',
              content: futureCardOne
            },
            {
              topBorderColor: '#AE4FF8',
              content: futureCardTwo
            },
          ],
        }}
      />
      <ContentBlock
        backgroundColor='#F8FAFC'
        bottomMargin='5vh'
        topMargin='0vh'
        left={{
          type: 'infoCards',
          cardWidth: '33vw',
          cardPaddingTop: '0vh',
          cardGap: '7vw',
          source: [
            {
              topBorderColor: '#AE4FF8',
              content: futureCardThree
            },
            {
              topBorderColor: '#AE4FF8',
              content: futureCardFour
            },
          ],
        }}
      />
      <ContentBlock
        left={{ type: 'text', source: closingSection,  buttonWidth: '21vw', buttons: [{ label: 'Book a Velocity Demonstration', href: '/contact#contact-form', state: openContactFormState, theme: 'purple' }] }}
        right={{ type: 'img', source: closingPicture, paddingLeft: '5vw', paddingRight: '10vw' }}
        topMargin='5vh'
        bottomMargin='5vh'
        bottomSeperatorLine
      />
    </>
  );
};

export default VelocityPage;
