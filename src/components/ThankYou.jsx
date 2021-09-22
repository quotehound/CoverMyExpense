import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ConnectStreams from '../ConnectMe';

class ThankYou extends Component {

    render() {

        const phone = document.getElementById('tele').value;

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const firstName = urlParams.get('first_name');


        return (
            <div>

                <ConnectStreams moduleId="1617" phoneNumber={phone}  />

                <div id="ma" /> 

                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>{firstName}, Get Connected With Your Matches!</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Your Matches
                </span>
              </div>
            </div>
           
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
           
          </div>
  
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">


            </div>
          </div>

          </div>

          </div>
        </div>

       


      </div>
            </div>
        )
    }
}

export default withRouter(ThankYou)