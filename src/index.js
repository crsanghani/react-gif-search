import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <Searchbar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
