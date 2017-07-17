import React from 'react';

const GifsTemp = ({ gifs }) => {

  // loop through gifs and generate a html block with each gifs props
  const gifItems = gifs.map((gif) => {
    return (
      <li key={gif.id}>
        <img src={gif.url} alt=''/>
      </li>
    );
  });

  return (
    <ul className='gif-list'>{gifItems}</ul>
  );
};

export default GifsTemp;
