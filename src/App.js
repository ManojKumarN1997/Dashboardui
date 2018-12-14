import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
              <Route exact path="/" component={Registration}>
              </Route>
              <Route path="/login" component={Login}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
