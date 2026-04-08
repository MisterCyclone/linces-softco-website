// Import react, styling and types
import React from 'react';
import './ContentBlock.css'
import type { contentPiece, contentPieceProps } from '../../types/ContentBlockTypes';

// Import primereact components
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Import functions
import { renderContent } from '../../functions/renterContent';
import { navigateToPath } from '../../functions/navigateToPath.ts';
import { useNavigate } from 'react-router-dom';

const ContentBlock: React.FC<contentPieceProps> = ({ left, right, useCard, topAlign, topMargin, backgroundColor, bottomMargin, topSeperatorLine, bottomSeperatorLine, miniBottomSeperatorLine }) => {
  const navigate = useNavigate();
  const hasSinglePiece = !right;

  const renderPiece = (piece: contentPiece) => {
    const buttons = piece.buttons ?? [];

    // Info cards has a special rule because mutiple are rendered inside one content piece
    // And so require unique styling
    const isInfoCardCollection = piece.type === 'infoCards';

    // Styling for a specific side
    const pieceStyle = {
      paddingLeft: piece.paddingLeft,
      paddingRight: piece.paddingRight,
      width: piece.width
    };

    const section = (
      <div className={`content-block-section ${isInfoCardCollection ? 'content-block-section-wide' : ''}`} style={pieceStyle}>

        {/* Main function that renders which type of content has been inserted and sorts it appropriately */}
        {renderContent(piece)}

        {/* Add any buttons passed in with this piece */}
        {buttons.length > 0 && (
          <div className='content-block-buttons' style={{ marginTop: piece.buttonMarginTop }}>
            {buttons.map((button, index) => (
              <Button
                outlined
                key={index}
                className={`content-block-button content-block-button--${button.theme ?? 'teal'}`}
                style={{ width: button.width ?? piece.buttonWidth }}
                label={button.label}
                onClick={() => navigateToPath(navigate, button.href)}
              />
            ))}
          </div>
        )}
      </div>
    );

    // Place section in a card if useCard is true for this piece
    if (piece.useCard) {
      return <Card className='content-block-section-card'>{section}</Card>;
    }

    return section;
  };

  // Main styling for the whole content block, so both sides
  const mainContentStyle: React.CSSProperties = {
    alignItems: topAlign ? 'flex-start' : 'center'
  };

  const wrapperStyle: React.CSSProperties = {
    backgroundColor,
  };

  const contentStyle: React.CSSProperties = {
    paddingTop: topMargin ?? '10vh',
    paddingBottom: bottomMargin ?? '0',
    borderTop: topSeperatorLine ? '0.4vh solid #DEDEDE' : undefined,
    borderBottom: bottomSeperatorLine && !miniBottomSeperatorLine ? '0.4vh solid #DEDEDE' : undefined,
  };

  // Create variables for left and right content and render them into one
  const leftContent = renderPiece(left);
  const rightContent = right ? renderPiece(right) : null;

  const layout = (
    <>
      {leftContent}
      {rightContent}
    </>
  );

  // If useCard is true for the whole block, wrap it all in a card
  if (useCard) {
    return (
      <div style={wrapperStyle}>
        <div style={contentStyle}>
          <Card className={`content-block-main-card ${hasSinglePiece ? 'content-block-main-single' : ''}`} style={mainContentStyle}>
            {layout}
          </Card>
        </div>
        {miniBottomSeperatorLine && <div className='content-block-mini-seperator-line' />}
      </div>
    );
  }

  // Return content block without card wrapper
  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        <div className={`content-block-main ${hasSinglePiece ? 'content-block-main-single' : ''}`} style={mainContentStyle}>
          {layout}
        </div>
      </div>
      {miniBottomSeperatorLine && <div className='content-block-mini-seperator-line' />}
    </div>
  );
};
export default ContentBlock;