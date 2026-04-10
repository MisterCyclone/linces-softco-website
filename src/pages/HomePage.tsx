import React from 'react';
import Banner from '../components/Banner/Banner';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import content from '../sitecontent/homepage.json';
import { homeBanner, hero1, softwareDevIcon, supportIcon, saasIcon, hostingIcon, webIcon, homeServices, homeOnePicture, homeTwoPicture, homeThreePicture, customsIcon, transportIcon, unifiedIcon, scalableIcon } from '../assets/pages/home_page/homeImages';
import { logo } from '../assets/global/globalImages';
import { velocityLogo } from '../assets/pages/velocity_page/velocityImages';
import { openContactFormState } from '../sitecontent/ContactFormContent';

const HomePage: React.FC = () => {
  const heroSection = content['Hero Section'];
  const aboutUsSection = content['About Us Section'];

  const velocityTitle = content['Velocity Title'];
  const velocityCTDMSTitle = content['Velocity CTDMS Title'];
  const velocityIntro = content['Velocity Introduction'];

  const velocityIntroCustoms = content['Customs Management Introduction'];
  const velocityIntroTransport = content['Transport Management Introduction'];
  const velocityIntroUnified = content['Unified Operational Platform Introduction'];
  const velocityIntroScalable = content['Scalable Software Architecture Introduction'];

  const servicesIntro = content['Services Introduction'];
  const softwareDevIntro = content['Bespoke Software Development'];
  const saasIntro = content['SaaS Platform Development'];
  const webDevIntro = content['Web Application Development'];
  const hostingIntro = content['Hosting and Technical Infrastructure'];
  const supportIntro = content['IT Support'];

  const endingOne = content['Ending One'];
  const endingTwo = content['Ending Two'];

  return (
    <>
      <Banner image={homeBanner} />
      <div id='home-overview' className='page-anchor'>
        <ContentBlock
          left={{ type: 'text', useCard: true, source: heroSection, buttons: [{ label: 'Book a Demo', href: '/contact#contact-form', state: openContactFormState, width: '15vw' }] }}
          right={{ type: 'img', source: hero1, paddingLeft: '3vw', paddingRight: '3vw' }}
          topAlign
        />
      </div>
      <ContentBlock
        left={{ type: 'img', source: logo }}
        right={{ type: 'text', source: aboutUsSection }}
        useCard
        bottomMargin='10vh'
      />
      <div id='home-velocity' className='page-anchor'>
        <ContentBlock
          left={{ type: 'text', source: velocityTitle, centerHeader: true }}
          backgroundColor='#F8FAFC'
          topSeperatorLine
          topMargin='5vh'
        />
      </div>
      <ContentBlock
        left={{ type: 'text', source: velocityIntro, useCard: true }}
        right={{ type: 'img', source: velocityLogo, paddingLeft: '3vw', paddingRight: '12vw' }}
        backgroundColor='#F8FAFC'
      />
      <ContentBlock
        left={{
          type: 'carousel',
          styling: { height: '50vh', theme: 'purple' },
          behavior: {
            numVisible: 2,
            numScroll: 1,
            circular: true,
            autoplayInterval: 5000,
          },
          source: [
            { src: homeOnePicture, alt: 'Home picture one' },
            { src: homeTwoPicture, alt: 'Home picture two' },
            { src: homeThreePicture, alt: 'Home picture three' }
          ]
        }}
        backgroundColor='#F8FAFC'
        bottomMargin='7vh'
        miniBottomSeperatorLine
      />
      <ContentBlock
        left={{ type: 'text', source: velocityCTDMSTitle, centerHeader: true }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
      />
      <ContentBlock
        backgroundColor='#F8FAFC'
        bottomMargin='5vh'
        topMargin='5vh'
        left={{
          type: 'infoCards',
          cardWidth: '18.3vw',
          buttonWidth: '19vw',
          buttonMarginTop: '5vh',
          source: [
            {
              icon: customsIcon,
              topBorderColor: '#AE4FF8',
              content: velocityIntroCustoms,
              readMoreLink: { text: 'Read More >>>', link: '/velocity-enterprise#customs-management' }
            },
            {
              icon: transportIcon,
              topBorderColor: '#AE4FF8',
              content: velocityIntroTransport,
              readMoreLink: { text: 'Read More >>>', link: '/velocity-enterprise#transport-management' }
            },
            {
              icon: unifiedIcon,
              topBorderColor: '#AE4FF8',
              content: velocityIntroUnified,
              readMoreLink: { text: 'Read More >>>', link: '/velocity-enterprise#unified-platform' }
            },
            {
              icon: scalableIcon,
              topBorderColor: '#AE4FF8',
              content: velocityIntroScalable,
              readMoreLink: { text: 'Read More >>>', link: '/velocity-enterprise#scalable-architecture' }
            }
          ],
          buttons: [
            { label: 'Book a Demo', href: '/contact#contact-form', state: openContactFormState, theme: 'purple' },
            { label: 'Explore Velocity Enterprise', href: '/velocity-enterprise', theme: 'purple' }
          ]
        }}
        bottomSeperatorLine
      />
      <div id='home-services' className='page-anchor'>
        <ContentBlock
          left={{ type: 'text', source: servicesIntro, useCard: true }}
          right={{ type: 'img', source: homeServices, paddingLeft: '5vw', paddingRight: '5vw' }}
          bottomMargin='5vh'
        />
      </div>
      <ContentBlock
        bottomMargin='5vh'
        topMargin='5vh'
        left={{
          type: 'infoCards',
          cardWidth: '15vw',
          buttonWidth: '15vw',
          buttonMarginTop: '5vh',
          source: [
            {
              icon: softwareDevIcon,
              topBorderColor: '#56C1C1',
              content: softwareDevIntro,
              readMoreLink: { text: 'Read More >>>', link: '/services#bespokesoftware' }
            },
            {
              icon: saasIcon,
              topBorderColor: '#56C1C1',
              content: saasIntro,
              readMoreLink: { text: 'Read More >>>', link: '/services#saasplatform' }
            },
            {
              icon: webIcon,
              topBorderColor: '#56C1C1',
              content: webDevIntro,
              readMoreLink: { text: 'Read More >>>', link: '/services#webapplication' }
            },
            {
              icon: hostingIcon,
              topBorderColor: '#56C1C1',
              content: hostingIntro,
              readMoreLink: { text: 'Read More >>>', link: '/services#hostinginfrastructure' }
            },
            {
              icon: supportIcon,
              topBorderColor: '#56C1C1',
              content: supportIntro,
              readMoreLink: { text: 'Read More >>>', link: '/services#itsupport' }
            }
          ],
          buttons: [{ label: 'View All Services', href: '/services', theme: 'teal', width: '14vw' }]
        }}
      />
      <ContentBlock
        left={{ type: 'text', source: endingOne, centerHeader: true }}
        right={{
          type: 'text',
          source: endingTwo,
          centerHeader: true,
          buttonWidth: '15vw',
          buttonMarginTop: '0vh',
          buttons: [{ label: 'Book a Demo', href: '/contact#contact-form', state: openContactFormState, width: '15vw' }]
        }}
        topAlign
        topSeperatorLine
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
        bottomSeperatorLine
      />
    </>
  );
};

export default HomePage;
