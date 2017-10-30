import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import HomepageContainer from '../containers/HomepageContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route path="/" component={ HeaderContainer } />
        <Route path="/login" component={ LoginContainer } />
        <Route exact path="/" component={ HomepageContainer } />
        <Route path="/register" component={ RegisterContainer } />
        <Route path="/searchresults" component={ SearchResultsContainer } />
      </div>
    );
  }
}

export default App;
