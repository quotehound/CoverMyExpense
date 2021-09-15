import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './LandingPage.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Logo from './Assets/cme.png';
import HeaderImage from './Assets/business.jpeg'

class LandingPage extends Component {

 
    nextStep(values){
        
        let zipValue = document.getElementById('zipCode').value;

        if(zipValue.length < 5 ){
            toast.error("Please enter a valid zipcode");

            values.preventDefault();
        }
    }



    render() {
        return (
            <div>
              
              



{/* End of header with Form */}

{/* Start Of how it works */}
<section className="relative pb-40 overflow-hidden backdrop">
  <nav className="relative py-8 px-4 lg:px-10 z-10">
    <div className="flex justify-between items-center">
      <a className="text-xl text-white font-semibold" href="#" data-config-id="brand">
        <img className="h-7" src="bendis-assets/logos/bendis-light.svg" alt="" width="auto" />
      </a>
      <button className="navbar-burger">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x={2} y={6} width={20} height={2} fill="white" /><rect x={2} y={11} width={20} height={2} fill="white" /><rect x={2} y={16} width={20} height={2} fill="white" /></svg>
      </button>
    </div>
  </nav>

  
  <div className="relative z-10 container px-4 mx-auto">
    <div className="max-w-4xl pt-20">
      <p className="max-w-sm text-lg text-white" data-config-id="desc">You are minutes away from saving on your Burial Insurance</p>
      <h2 className="mt-8 mb-8 text-5xl lg:text-7xl text-white font-bold" data-config-id="header">Compare Multiple Burial Insurance Quotes</h2>
      <div className="flex flex-wrap lg:flex-nowrap max-w-md">
        <input className="mb-2 lg:mb-0 w-full lg:w-2/3 py-4 pl-4 text-sm border" type="text" placeholder="Enter Your Zipcode" />
        <button className="w-full lg:w-auto py-5 px-8 text-sm font-bold uppercase bg-blue-500 hover:bg-blue-400" data-config-id="hero-primary-action">Get&nbsp;started&nbsp;Now</button>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu relative z-50">
    <div className="navbar-backdrop fixed inset-0 bg-blue-800 opacity-90" />
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-16 pr-6">
        <a className="ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none" href="#" data-config-id="brand">
          <img className="h-7" src={Logo} alt="" width="auto" />
        </a>
      </div>
     
    </nav>
  </div>
</section>


{/* End of how it works */}

{/* CTA Section Start */}
<section className="relative py-20  bg-gray-100">
  <div className="relative container px-4 mx-auto">
    <div className="flex flex-wrap items-center -mx-4">
    <div className="relative w-full lg:w-1/2 px-4">
        <img className="rounded-xl object-cover" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" data-config-id="image" />
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0 ">
        <div className="max-w-lg ">
          <span className="text-lg text-blue-400 font-semibold" data-config-id="label">Start Saving On Your <span className="spanText">Auto Insurance</span></span>
          <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-semibold" data-config-id="header">Saving at your finger tips...</h2>
          <p className="text-md text-gray-500" data-config-id="desc">Car insurance is required in almost every U.S. state, but finding the right policy at a good price can be a challenge. If you're wondering which insurer provides the best rates or what type of coverage you need, the answers to these questions depend on a number of factors. <br/> Fortunately, there is <span className="spanText">Quotehound</span>. Just fill out our quick form and start saving hundreds!</p>
          <a className="inline-block px-8 py-4 mt-5 text-sm text-white font-medium leading-normal bg-blue-500 hover:bg-blue-600 rounded transition duration-200" onClick={this.autoFocusClick}>Start Your Free Quote!</a>

        </div>
      </div>

    </div>
  </div>
  <img className="hidden xl:block absolute top-0 right-0 mt-52" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="" />
</section>

{/* CTA Section End */}


{/* Footer  */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between items-center -mx-4">
      <div className="w-full lg:w-2/6 px-4">
        <a className="inline-block mb-6 text-gray-900 text-lg font-semibold" href="#" data-config-id="brand">
          <img className="h-7" src={Logo} alt="" width="auto" />
        </a>
        <p className="hidden lg:block text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>
      </div>
      <div className="w-full lg:w-4/6 px-4">
        <div className="flex flex-wrap items-center justify-end">
          <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-12">
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link1">Do Not Sell</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link2">Privacy Policy</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link3">Terms & Conditions</a></li>
          </ul>
          <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm text-white font-medium leafing-normal bg-blue-500 hover:bg-blue-300 rounded" onClick={this.autoFocusClick} data-config-id="primary-action">Get Your Free Quote</a>
        </div>
        <p className="mt-6 lg:hidden text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}

export default withRouter(LandingPage)
