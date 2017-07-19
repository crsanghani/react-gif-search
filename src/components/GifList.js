import React from 'react';
import GifItem from './GifItem';

// takes the gifs obj from index and maps the ids in to the component

const GifList = (props) => {
  const gifItems = props.gifs.map(image => {
    return <GifItem key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect} />
  });

// displays the variable that is created by the list container
  return (
    <div className='gif-list'>{gifItems}</div>
  );
};

export default GifList;

// this is a functional stateless component

// this means it doesnt track or modify the apps state, it is responsible for
// for taking a list from app and rendering a GifItem obj for each item in the array
