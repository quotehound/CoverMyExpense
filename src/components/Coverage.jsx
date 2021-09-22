import React, { Component } from 'react'

import { withRouter } from 'react-router';
import Logo from '../Assets/cme.png'
import './forms.css';
import Footer from './Footer';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



class Coverage extends Component {


    cover = (values) => {

        values.preventDefault();
        
        let coverage = values.currentTarget.dataset.value;

        this.props.setCoverage(coverage);

        

   const urlSearch = window.location.search;

   const urlParams = new URLSearchParams(urlSearch);

   const zip = urlParams.get('zip');

        this.props.history.push('/gender' + '?zip=' + zip + '&coverage=' + coverage);

    }

    render() {
        return (
            <div className="back bg-white">
            <div className="bg-blue-500 headerText justify-center align-middle text-center">
                <h2>Get Your Free Life Insurance Quote</h2>
            </div>
            <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
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

                            <div>
                                <div className="relative flex justify-center text-sm leading-5 con">
                                    <span className="px-2 text-black-500 text-3xl bold header">
                                        What's Your Desired Coverage Amount?
                                    </span>
                                </div>
                            </div>
                            <form onSubmit={this.cover} >
                                <div className="mt-6">
                                    <div className="w-full flex text-sm leading-5">

                                        <div className="text-sm leading-5 buttonBlockRow">                              

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="5000" onClick={(values) => this.cover(values)}>$5,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="10000" onClick={(values) => this.cover(values)}>$10,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="15000" onClick={(values) => this.cover(values)}>$15,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="20000" onClick={(values) => this.cover(values)}>$20,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="30000" onClick={(values) => this.cover(values)}>$30,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="40000" onClick={(values) => this.cover(values)}>$40,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="50000" onClick={(values) => this.cover(values)}>$50,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="60000" onClick={(values) => this.cover(values)}>$60,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="70000" onClick={(values) => this.cover(values)}>$70,000</button> 
                                            
                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="80000" onClick={(values) => this.cover(values)}>$80,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="90000" onClick={(values) => this.cover(values)}>$90,000</button> 

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="100000" onClick={(values) => this.cover(values)}>100,000</button> 



                                
                                       </div>
                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>




            </div>
          <Footer />


        </div>
        )
    }
}

export default withRouter(Coverage)
