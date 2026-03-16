// Import react and styling
import React from 'react';
import './TextBlock.css';
import type { textBlockProps } from '../../types/textBlockInterface';

const TextBlock: React.FC<textBlockProps> = ({ title, subtitle, text, centerHeader }) => {

  const centerClass = centerHeader ? "center-block" : "";
  const headerClass = centerHeader ? "center-text" : "";

  return (
    <div className={`block ${centerClass}`}>
      <h1 className={headerClass}>{title}</h1>
      <h2 className={headerClass}>{subtitle}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TextBlock;