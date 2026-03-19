import React from 'react';
import { Card } from 'primereact/card';
import type { contentPiece, contentPieceProps } from '../../types/ContentBlockTypes';
import './ContentBlock.css'
import { renderContent } from '../../functions/renterContent';
import { Button } from 'primereact/button';

const ContentBlock: React.FC<contentPieceProps> = ({ left, right, useCard, topAlign, noTopMargin }) => {

  const renderPiece = (piece: contentPiece) => {
    const buttons = piece.buttons ?? [];
    const pieceStyle = {
      paddingLeft: piece.paddingLeft,
      paddingRight: piece.paddingRight,
      width: piece.width
    };

    return (
      <div className='content-block-section' style={pieceStyle}>
          {renderContent(piece)}
          {buttons.length > 0 && (
            <div className='content-block-buttons'>
              {buttons.map((button, index) => (
                <Button
                  className='buttons' outlined
                  key={index} label={button.label} 
                  onClick={() => window.location.href = button.href}
                />
              ))}
            </div>
          )}
      </div>
    );
  };

  const styling = {
    alignItems: topAlign ? "flex-start" : "center",
    marginTop: noTopMargin ? "0" : "10vh"
  };

  const leftContent = renderPiece(left);
  let rightContent = null;
  if (right) {
    rightContent = renderPiece(right);
  }

  const layout = (
    <>
      {leftContent}
      {rightContent}
    </>
  );

  if (useCard) {
    return (
      <Card className={`content-block-main`} style={styling}>
        {layout}
      </Card>
    );
  }

  return (
    <div className={`content-block-main`} style={styling} >
      {layout}
    </div>
  );
};
export default ContentBlock;