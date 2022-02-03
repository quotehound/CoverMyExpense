import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';

import LandingPage from './LandingPage';
import WhoYouAre from './components/WhoYouAre'
import Coverage from './components/Coverage';
import Gender from './components/Gender';
import Month from './components/Month';
import Day from './components/Day';
import Year from './components/Year';
import Address from './components/Address';
import Name from './components/Name';
import EmailPhone from './components/Email&Phone';
import ThankYou from './components/ThankYou';

import MA from './MA';


class App extends Component {



  state = {
    route: '/',
    routes: [
      '/',
      '/who',
      '/coverage',
      '/gender',
      '/month',
      '/day',
      '/year',
      '/address',
      '/name',
      '/email-phone',
      '/thank-you'

    ],

    postData: {

      lp_campaign_id: '60ec904883e96',
      lp_campaign_key: 'HdnykrcQ76bVq8BtWmFK',
      lp_s3: '12',
      lp_s4: '13',
      landing_Page: 'covermyexpense.com',
      lp_requestid: document.getElementById('lp').value,
      gclid: document.getElementById('gclid').value,
      TCPA_Consent: 'Yes',
      TCPA_Language:
        'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      IP_Address: '',
      user_agent: navigator.userAgent,
      zip_code: localStorage.getItem('zip'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      desired_coverage: '',
      gender: '',
      month: '',
      date: '',
      year: '',
      dob: '',
      address: '',
      first_name: '',
      last_name: '',
      email_address: '',
      phone_home: '',
      entrance_url: '',

    },

  };

  //   callMediaAlpha = () => {

  // 		var tempArray = {
  //        zip: this.state.zip_code,
  // }

  // 		window.MediaAlphaExchange = {    
  // 			"data": {       
  // 				  "zip": tempArray.zip,   
  // 			  },   
  // 			"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",    
  // 			"sub_1": "test sub id",    
  // 			 "type": "ad_unit",   
  // 			   "version": 17 }; 

  // 	  window.MediaAlphaExchange__load('mediaalpha_placeholder'); 

  // 	   }


  // 	  UNSAFE_componentWillUpdate  = () => {
  // 		console.log(this.state.postData);
  // 	  };



  	copyValuesToPostData2 = () => {
  		var tempArray = {
  			zip: this.state.postData.zip_code,
  		};
  		this.setState({ postData2: tempArray });
  		// var MediaAlphaExchange = { 
  		// 	"data": {
  		// 	   "zip": "",
  		// 	},
  		// 	"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",
  		// 	"sub_1": "test sub id",
  		// 	"type": "ad_unit",
  		// 	"version": 17
  		//  };
  		 console.log("SetMA");
  //MediaAlphaExchange__load('mediaalpha_placeholder');
  		return this.state.postData2;
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
                      jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                      zip_code: v,
                    },
                  });

                }
                }

              />

            </Route>

            <Route path='/coverage-type' exact>
              <WhoYouAre
 setCoverageType={(v) => {
  this.setState({
    postData: {
      ...this.state.postData,

      coverage_type: v,
    },
  });
}}
              />

            </Route>

            <Route path='/coverage' exact>
              <Coverage

                setCoverage={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      desired_coverage: v,
                    },
                  });
                }}

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

                  console.log(this.props.postData)
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

                }}
              />

            </Route>

            <Route path='/day' exact>

              <Day

                setDate={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      date: v,
                    },
                  });
                }}

              />
            </Route>

            <Route path='/year' exact >

              <Year

                setYear={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      year: v,
                    },
                  });
                }}

                setDOB={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      dob: v,
                    },

                  });
                }}
              />
            </Route>

            <Route path='/address' exact>

              <Address
                setAddress={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      address: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/name' exact>

              <Name


                setFName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      first_name: v,
                    },
                  });


                }}

                setLName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      last_name: v,
                    },
                  });
                }}






              />

            </Route>

            <Route path='/email-phone' exact>

              <EmailPhone

                email_address={this.state.postData.email_address}
                phone_home={this.state.postData.phone_home}

                setEmail={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      email_address: v,
                    },
                  });
                }}

                setPhone={(v) => {
                  this.setState({
                    postData: {

                      ...this.state.postData,
                      phone_home: v,
                    },
                  });
                }}

                setURL={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      entrance_url: v,
                    }
                  })
                }}


                postData={this.state.postData}


              />
            </Route>

            <Route path='/thank-you' exact>
              <ThankYou

                postData2={this.state.postData}
    
              />
            

            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
