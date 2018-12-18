import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';
import Homepage from './components/homepage';
import Profile from './components/profile';
import Message from './components/message';
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
              <Route path="/homepage" component={Homepage}>
              </Route>
             <Route path="/profile" component={Profile}>
             </Route>
             <Route path="/message" component={Message}>
             </Route>
            
            
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
