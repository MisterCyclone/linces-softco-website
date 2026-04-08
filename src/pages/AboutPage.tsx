import React from 'react';
import Banner from '../components/Banner/Banner';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import aboutUsBanner from '../assets/pages/aboutus_page/aboutus_banner.png';
import pageContent from '../sitecontent/aboutuspage.json';
import logo from '../assets/global/logo.png';

import visionPicture from '../assets/pages/aboutus_page/vision_picture.png';
import missionPicture from '../assets/pages/aboutus_page/mission_picture.png';
import offerPicture from '../assets/pages/aboutus_page/offer_picture.png';

const AboutPage: React.FC = () => {

  const overviewSection = pageContent['Company Overview'];
  const missionSection = pageContent['Mission and Philosophy'];
  const offerSection = pageContent['What we Offer'];
  const visionSection = pageContent['Vision and Direction'];
  const servicesLine = pageContent['Services Line'];

  return (
    <>
      <Banner image={aboutUsBanner} />
      <div id='companyoverview' className='page-anchor'>
      <ContentBlock
        left={{ type: 'text', source: overviewSection, useCard: true }}
        right={{ type: 'img', source: logo }}
        bottomMargin='5vh'
      />
      </div>

      <div id='missionphilosophy' className='page-anchor'>
      <ContentBlock
        right={{ type: 'text', source: missionSection, useCard: true }}
        left={{ type: 'img', source: missionPicture, paddingLeft: '1vw', paddingRight: '5vw' }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
      />
      </div>
      
      <div id='whatweoffer' className='page-anchor'>
      <ContentBlock
        left={{ type: 'text', source: offerSection, useCard: true }}
        right={{ type: 'img', source: offerPicture, paddingLeft: '3vw'}}
        topMargin='5vh'
        bottomMargin='5vh'
      />
      </div>

      <div id='visiondirection' className='page-anchor'>
      <ContentBlock
        right={{ type: 'text', source: visionSection, useCard: true }}
        left={{ type: 'img', source: visionPicture, paddingLeft: '4vw', paddingRight: '7vw' }}
        backgroundColor='#F8FAFC'
        topMargin='5vh'
        bottomMargin='5vh'
      />
      </div>

      <ContentBlock
        left={{ type: 'text', source: servicesLine, centerHeader: true, buttonMarginTop: '5vh', decapitalizeHeader: true, buttonWidth: '16vw', buttons: [{ label: 'Contact Linces Softco', href: '/contact' }] }}
        topMargin='5vh'
        bottomMargin='5vh'
      />
    </>
  );
};

export default AboutPage;
