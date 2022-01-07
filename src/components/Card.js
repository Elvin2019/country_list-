import React from 'react';
import imageNotAvaliable from '../assets/images/Image_not_available.png'

const Card = ({ name, imageSize, shortName, }) => {
  const sizes = imageSize.split('x');
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw1 shadow-5' style={{width:+sizes[0] + 40, height:+sizes[1] +40}}>
      <img alt='countries' src={`https://flagcdn.com/${imageSize}/${shortName.toLowerCase()}.png`} onError={(e) => {
         e.currentTarget.onerror = null; // prevents looping
        e.currentTarget.src = imageNotAvaliable;
        
      }} />
    </div>
  );
}

export default Card;
