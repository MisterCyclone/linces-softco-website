// Import react and styling
import React from 'react';
import '../ContentBlock/ContentBlock.css';
import type { textBlockProps } from '../../types/ContentBlockTypes';

const TextBlock: React.FC<textBlockProps> = ({ title, subtitle, text, centerHeader }) => {

  return (
    <>
      <h1 style={{textAlign: centerHeader ? "center" : "left"}}>{title}</h1>
      <h2 style={{textAlign: centerHeader ? "center" : "left"}}>{subtitle}</h2>
      <p>{text}</p>
    </>
    );
  };

export default TextBlock;