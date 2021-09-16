import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';


import LandingPage from './LandingPage';

import Gender from './components/Gender';

class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/gender'
    ],

    postData: {
      zip_code: '',
      gender: '',
    },

  };


  // Handle change Route
  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path='/' exact >

              <LandingPage

                setZipCode={(v) => {

                  this.setState({
                    postData: {
                      ...this.state.postData,
                      zip_code: v,
                    },
                  });

                  console.log("Success, " + v)
                }
                }

              />

            </Route>

            <Route path='/gender' component={Gender} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App; 