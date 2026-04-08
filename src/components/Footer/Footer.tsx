// Import react and styling
import React from 'react';
import './Footer.css';

// Import assets
import logo from '../../assets/global/logo.png';
import afssLogo from '../../assets/global/afss_logo.png';

// Import content
import { officeDetails, companyDetails, contactLinks, credits, copyright } from '../../sitecontent/FooterContent';

const Footer: React.FC = () => {
  return (
    <div className='footer-structure'>

      {/* Left Section of the footer */}
      <div className='footer-left'>
        <div className='footer-block-info'>

          {/* Left side of the left section */}
          <div className='footer-block'>
            {officeDetails.map((line) => ( 
              <div key={line.text} className='footer-block-line'>
                {line.icon && <div className={`${line.icon} footer-icon`}/>}
                <div className='footer-text'>{line.text}</div>
              </div>
            ))}
          </div>

          {/* Right side of the left section */}
          <div className='footer-block'>
            {companyDetails.map((line) => (
              <div key={line.text} className='footer-block-line'>
                <div className={`${line.icon} footer-icon`}/>
                <div className='footer-text'> {line.text}</div>
              </div>
            ))}

            {/* Run this instead if line has a link */}
            {contactLinks.map((link) => (
              <a key={link.label} className='footer-link' href={link.href} target={link.target} rel={link.rel}>
                <div className={`${link.icon} footer-icon`}/>
                <div className='footer-text'>{link.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section of the footer */}
      <div className='footer-middle'>
        <img src={logo} className='footer-logo-main'/>
        <div>{copyright.map((line) => (<div key={line} className='footer-text'>{line}</div>))}</div>
      </div>

      {/* Right Section of the footer */}
      <div className='footer-right'>
        <img src={afssLogo} className='footer-logo-credit' alt='AFSS logo' />
        {credits.map((group) => (
          <div key={group[0]}> {group.map((line) => ( <div key={line} className='footer-credit-text'> {line} </div>))}</div>))}
      </div>
    </div>
  );
};

export default Footer;