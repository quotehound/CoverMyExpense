import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';

import LandingPage from './LandingPage';
import Gender from './components/Gender';
import Month from './components/Month'

class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/gender',
      '/month'
    ],

    postData: {
      zip_code: '',
      gender: '',
      month: '',
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

                  console.log("updated post value zip with, " + v)
                }
                }

              />

            </Route>

            <Route path='/gender' exact >
              <Gender

                setGender={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      gender: v,
                    },
                  });

                  console.log(this.props.postData.gender)
                }}
              />
            </Route>

            <Route path='/month' exact>

              <Month
                setMonth={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      month: v,
                    },
                  });

                  console.log(this.props.postData.month)
                }}
              />

            </Route>

          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;