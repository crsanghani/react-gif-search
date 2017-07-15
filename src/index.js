import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import Searchbar from './components/Searchbar';

class App extends React.Component {

  constructor() {
    super();
    // dummy data
    this.state = {
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300'
        },
        {
          id: 4,
          url: 'http://fakeimg.pl/300'
        }
      ]
    }

  }

  // term change handles the input change from Searchbar state
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <Searchbar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
