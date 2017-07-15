import React from 'react';

// the image obj is passed in to GifItem from GifList

const GifItem = (image) => {
  return (
    <li>
      <img src={image.gif.url} alt=''/>
    </li>
  )
};

export default GifItem;
