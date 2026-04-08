import type { sizeValue } from './CommonTypes.ts';
import type { carouselTheme, carouselImage, carouselStyleProps, carouselBehaviorProps } from './ImageCarouselTypes.ts';
import type { infoCardData } from './InfoCardTypes.ts';
import type { textBlock } from './TextBlockTypes.ts';

export type contentPieceProps = {
  left: contentPiece;
  right?: contentPiece;
  useCard?: boolean;
  topAlign?: boolean;
  topMargin?: sizeValue;
  bottomMargin?: sizeValue;
  backgroundColor?: string;
  topSeperatorLine?: boolean;
  bottomSeperatorLine?: boolean;
  miniBottomSeperatorLine?: boolean;
};

type baseContentPiece = {
  paddingLeft?: sizeValue;
  paddingRight?: sizeValue;
  width?: sizeValue;
  buttonWidth?: sizeValue;
  buttonMarginTop?: sizeValue;
  buttons?: contentButton[];
  useCard?: boolean;
};

export type contentButton = {
  label: string;
  href: string;
  theme?: carouselTheme;
  width?: sizeValue;
};

type infoCardStyleProps = {
  cardWidth?: sizeValue;
  cardPaddingTop?: sizeValue;
  cardGap?: sizeValue;
};

type carouselContentPiece = {
  styling?: carouselStyleProps;
  behavior?: carouselBehaviorProps;
};

export type contentPiece =
  ({ type: 'text'; source: textBlock; centerHeader?: boolean; decapitalizeHeader?: boolean } & baseContentPiece) |
  ({ type: 'img'; source: string } & baseContentPiece) |
  ({ type: 'infoCards'; source: infoCardData[] } & infoCardStyleProps & baseContentPiece) |
  ({ type: 'carousel'; source: carouselImage[] } & carouselContentPiece & baseContentPiece);

