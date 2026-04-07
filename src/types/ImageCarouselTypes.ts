import type { sizeValue } from './CommonTypes.ts';

export type carouselTheme = 'teal' | 'purple';

export type carouselImage = {
  src: string;
  alt?: string;
};

export type carouselStyleProps = {
  theme?: carouselTheme;
  topBorderColor?: string;
  height?: sizeValue;
};

export type carouselBehaviorProps = {
  numVisible?: number;
  numScroll?: number;
  circular?: boolean;
  autoplayInterval?: number;
};

export type carouselOptions = carouselStyleProps & carouselBehaviorProps;

export type imageCarouselProps = {
  images: carouselImage[];
} & carouselOptions;
