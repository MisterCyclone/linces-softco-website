import React from 'react';
import { Card } from 'primereact/card';
import type { contentPieceProps } from '../../types/textBlockInterface';
import './ContentBlock.css'
import { renderContent } from '../../functions/renterContent';



const ContentBlock: React.FC<contentPieceProps> = ({ left, right, useCard, topAlign }) => {

  const leftContent = renderContent(left);
  const rightContent = renderContent(right);
  const layoutClass = `content-block`;
  const alignClass = topAlign ? "align-start" : "align-center";

  const layout = (
    <>
      {leftContent}
      {rightContent}
    </>
  );

  if (useCard) {
    return (
      <Card className={`${layoutClass} ${alignClass}`}>
        {layout}
      </Card>
    );
  }

  return (
    <div className={`${layoutClass} ${alignClass}`}>
      {layout}
    </div>
  );
};
export default ContentBlock;