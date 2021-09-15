import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import LandingPage from './LandingPage';

class App extends Component { 
  
  
  state = {
  route: '/',
  routes: [
      '/',
  ]
}


// Handle change Route
changeRoute = () => {
  this.setState({
    route: '',
  });
};

  render(){
      return(
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' component={LandingPage} exact />
              </Switch>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;