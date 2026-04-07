// Import react, styling and types
import React from 'react';
import '../ContentBlock/ContentBlock.css';
import type { textBlockProps } from '../../types/TextBlockTypes.ts';

/**
 * The TextBlock component displays a block of text with a title and subtitle.
 * @returns The rendered TextBlock component.
 * 
 * @param {string} props.title - The title of the text block.
 * @param {string} props.subtitle - The subtitle of the text block.
 * @param {string} props.text - The main text content of the block.
 * @param {boolean} props.centerHeader (optional) - Whether to center-align the header.
 * @param {boolean} props.decapitalizeHeader (optional) - Whether to decapitalize the header.
 *
  * @example
  * <TextBlock
  *   title="The Pirates Code"
  *   subtitle="Rule One"
  *   text="Kiss all your mateys goodnight."
  *   centerHeader={true}
  *   decapitalizeHeader={false}
  * />
 */

const TextBlock: React.FC<textBlockProps> = ({ title, subtitle, text, centerHeader, decapitalizeHeader }) => {

  // Function to check if a string has content, if not then that element will not be rendered
  const hasContent = (value: string | null | undefined) => typeof value === 'string' && value.trim().length > 0;

  return (
    <>
      {hasContent(title) && (
        <h1 style={{ textAlign: centerHeader ? 'center' : 'left', textTransform: decapitalizeHeader ? 'none' : 'uppercase' }}>
          {title}
        </h1>
      )}
      {hasContent(subtitle) && (
        <h2 style={{ textAlign: centerHeader ? 'center' : 'left', textTransform: decapitalizeHeader ? 'none' : 'uppercase' }}>
          {subtitle}
        </h2>
      )}
      {hasContent(text) && <p>{text}</p>}
    </>
    );
  };

export default TextBlock;