// Import react, styling and types
import React from 'react';
import './ImageCarousel.css';
import type { imageCarouselProps } from '../../types/ImageCarouselTypes.ts';

// Import primereact components
import { Carousel } from 'primereact/carousel';

// Function to help scale image sizes to fit in dynamic carousel heights
const toCssSize = (value: number | string): string =>
  typeof value === 'number' ? `${value}px` : value;

const ImageCarousel: React.FC<imageCarouselProps> = ({
  images,
  theme = 'teal',
  topBorderColor,
  height = '40vh',
  numVisible = 1,
  numScroll = 1,
  circular = true,
  autoplayInterval
}) => {

  // Hold the stying for theme and height
  const cardStyle: React.CSSProperties = {
    borderTopColor: topBorderColor,
    '--carousel-height': toCssSize(height)
  } as React.CSSProperties;

  // Template to apply styling to each image in the carousel
  const itemTemplate = (image: imageCarouselProps['images'][number]) => (
    <div className='image-carousel-slide'>
      <img
        className='image-carousel-image'
        src={image.src}
        alt={image.alt ?? 'carousel image'}
      />
    </div>
  );

  // Return the carousel component
  return (
    <div className={`image-carousel-card image-carousel-card--${theme}`} style={cardStyle}>
      <Carousel
        value={images}
        itemTemplate={itemTemplate}
        numVisible={numVisible}
        numScroll={numScroll}
        circular={circular && images.length > 1}
        autoplayInterval={autoplayInterval}
        showNavigators={images.length > 1}
        showIndicators={images.length > 1}
      />
    </div>
  );
};

export default ImageCarousel;
