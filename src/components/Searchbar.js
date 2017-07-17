import React from 'react';

export default class Searchbar extends React.Component {

  // handles updating the term prop when the input is used 
  onInputChange(term) {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className='search'>
        <input onChange={e => this.onInputChange(e.target.value)}
               placeholder='Enter text to search for gifs!'/>
      </div>
    );
  }

};
