// Import React
import React from 'react';

// Import styling
import './Banner.css'

// Type to allow pictures to be passed in as props
type bannerProps = {
  image: string;
}

const Banner: React.FC<bannerProps> = ({image}) => {

  return (
    <img src={image} className='banner'/>
  )
}

export default Banner;