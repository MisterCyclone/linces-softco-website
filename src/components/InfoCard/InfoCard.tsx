// Import react, styling and types
import React from 'react';
import './InfoCard.css'
import type { infoCardProps } from '../../types/InfoCardTypes.ts';

// Import primereact components
import { Card } from 'primereact/card';

// Import functions
import { useNavigate } from 'react-router-dom';
import { navigateToPath } from '../../functions/navigateToPath.ts';

// Import components
import TextBlock from '../TextBlock/TextBlock';

const InfoCard: React.FC<infoCardProps> = ({topBorderColor, readMoreLink, content, icon, cardWidth, cardPaddingTop}) => {
  
  // Set up navigate function for read more links
  const navigate = useNavigate();

  // Styling for the card, including dynamic top border color and optional width and padding
  const cardStyle: React.CSSProperties = {
    borderTopColor: topBorderColor,
    width: cardWidth,
    paddingTop: cardPaddingTop
  };

  return (
    <Card className='info-card-main' style={cardStyle}>
      <div className='info-card-icon-wrap'>
        {/* Render icon if supplied */}
        <img src={icon} alt='' className='info-card-icon'/>
      </div>

      {/* Render text content */}
      <div className='info-card-content'>
        <TextBlock
          title={content.title}
          subtitle={content.subtitle}
          text={content.text}
          centerHeader={true}
          decapitalizeHeader={true}
        />
        {/* Add read more buttons if supplied and setup navigation */}
        {readMoreLink && (
          <button type='button' className='info-card-read-more' onClick={() => navigateToPath(navigate, readMoreLink.link)}>
            {readMoreLink.text}
          </button>
        )}
      </div>
    </Card>
  );
};

export default InfoCard;