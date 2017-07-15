import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import Searchbar from './components/Searchbar';
import request from 'superagent';

class App extends React.Component {

  constructor() {
    super();
    // default state set within the constructor
    this.state = {
      gifs: []
    }

  }

  // term change handles the input change from Searchbar state
  handleTermChange(term) {

    // giphy api key react-gif-app
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=4b8da8802f574aa8bbb3571b5b7adab0`;

    // superagent api handler alt to axios
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div>
        <Searchbar onTermChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
