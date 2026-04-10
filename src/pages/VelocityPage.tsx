import React from 'react';
import Banner from '../components/Banner/Banner';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import { velocityBanner, velocityLogo, heroTwoPicture, heroThreePicture, closingPicture, customOnePicture, customsTwoJpegPicture, customsThreePicture, transportOnePicture, transportTwoPicture, transportThreePicture, unifiedOnePicture, unifiedTwoPicture, operationalOnePicture, operationalTwoPicture, operationalThreePicture, secureOnePicture, secureTwoPicture, scaleableOnePicture, scalableTwoPicture } from '../assets/pages/velocity_page/velocityImages';
import pageContent from '../sitecontent/velocitypage.json';
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

  const customsCarouselSource = [
    { src: customOnePicture, alt: 'Customs management picture one' },
    { src: customsTwoJpegPicture, alt: 'Customs management picture two' },
    { src: customsThreePicture, alt: 'Customs management picture three' },
  ];

  const transportCarouselSource = [
    { src: transportOnePicture, alt: 'Transport management picture one' },
    { src: transportTwoPicture, alt: 'Transport management picture two' },
    { src: transportThreePicture, alt: 'Transport management picture three' },
  ];

  const unifiedCarouselSource = [
    { src: unifiedOnePicture, alt: 'Unified platform picture one' },
    { src: unifiedTwoPicture, alt: 'Unified platform picture two' },
  ];

  const operationalCarouselSource = [
    { src: operationalOnePicture, alt: 'Operational visibility picture one' },
    { src: operationalTwoPicture, alt: 'Operational visibility picture two' },
    { src: operationalThreePicture, alt: 'Operational visibility picture three' },
  ];

  const secureCarouselSource = [
    { src: secureOnePicture, alt: 'Secure infrastructure picture one' },
    { src: secureTwoPicture, alt: 'Secure infrastructure picture two' },
  ];

  const scalableCarouselSource = [
    { src: scaleableOnePicture, alt: 'Scalable architecture picture one' },
    { src: scalableTwoPicture, alt: 'Scalable architecture picture two' },
  ];

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
            source: customsCarouselSource
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
            source: transportCarouselSource
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
            source: unifiedCarouselSource
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
          source: operationalCarouselSource
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
          source: secureCarouselSource
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
            source: scalableCarouselSource
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
