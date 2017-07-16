import React from 'react';

// the image obj is passed in to GifItem from GifList

const GifItem = (image) => {
  return (

  // this is the code for individual gifs that are shown inside the gif-list container
  <div className='gif-item'>
    <img src={image.gif.images.downsized.url} alt=''/>
  </div>

  )
};

export default GifItem;
