import React from 'react';

// the image obj is passed in to GifItem from GifList

const GifItem = ({ gif, onGifSelect }) => {
  return (

  // this is the code for individual gifs that are shown inside the gif-list container
  <div className='gif-item' onClick={ () => onGifSelect(gif) }>
    <img src={gif.images.downsized.url} alt=''/>
  </div>

  )
};

export default GifItem;
