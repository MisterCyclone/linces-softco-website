import type { sizeValue } from './CommonTypes.ts';
import type { textBlock } from './TextBlockTypes.ts';

export type readMoreLinkProps = {
  text: string;
  link: string;
};

export type infoCardData = {
  topBorderColor: string;
  readMoreLink?: readMoreLinkProps;
  content: textBlock;
  icon?: string;
};

export type infoCardProps = infoCardData & {
  cardWidth?: sizeValue;
  cardPaddingTop?: sizeValue;
  cardGap?: sizeValue;
};
