import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { withRouter } from 'react-router';

import './forms.css';



class Gender extends Component {

  render() {
    return (
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  40%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
            <div className="absolute inset-0 flex items-center content-center ">
              <div className="w-full border-t border-gray-50">
              </div>
            </div>

            <div> 
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-black-500 text-3xl bold header bg-white">
                Choose Your Gender
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">

              <div className="relative flex justify-center text-sm leading-5 buttonBlock">
                <span className="block">

                  <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg chooseButton ">
                    Male
                  </button>


                  <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg chooseButton ">
                    Female
                  </button>

                  <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg chooseButton ">
                    Non-binary
                  </button>
                </span>
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

export default withRouter(Gender)