import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Searchbar from '../components/Searchbar';
import '../styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar onTermChange={this.props.actions.requestGifs} />
      </div>
    );
  }
}

// mapStateToProps passes data from the container to the store

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

// mapDispatchToProps passes data to the container from the store
// it makes the result of reducers available to the container

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
