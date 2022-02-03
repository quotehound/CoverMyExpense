import React, { Component } from 'react'

class MA extends Component {



    componentDidMount() {

        const renderScript = document.createElement("script");

        renderScript.innerHTML = "var data = { 'frequencyexercise' : '2' , 'policyamount' : '3' , 'pubcampaignid' : '7574' ,'zipcode' : localStorage.getItem('zip') , 'vertical' : '5', 'state' : localStorage.getItem('state') }; Transparently.Render(data)";
        

         document.body.appendChild(renderScript);

         const script = document.createElement("script");

         script.src = "https://api.transparent.ly/search/blue/green/Loader";
         script.async = true;
        document.body.appendChild(script);
        
        
    }


    render() {
        return (



<div id="transparently-ads" />



   
        )
    }
}

export default MA;
