import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import Searchbar from './components/Searchbar';
import request from 'superagent';

// imports the CSS file so that webpack knows to bundle it with the JS file
import './styles/app.css';

class App extends React.Component {

  constructor() {
    super();
    // default state set within the constructor
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };

  }

  // modal is opened when user clicks on gif
  openModal(gif) {
    this.setState({
      selectedGif: gif,
      modalIsOpen: true
    });
  }

  // modal is closed when user clicks on closed
  closeModal() {
    this.setState({
      selectedGif: null,
      modalIsOpen: false
    });
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
        <GifList  gifs={this.state.gifs}
                  onGifSelect={ selectedGif => this.openModal(selectedGif) } />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
