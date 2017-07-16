import React from 'react';

export default class Searchbar extends React.Component {

  constructor() {
    super();
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
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
