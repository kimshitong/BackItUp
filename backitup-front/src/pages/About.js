import React, { useEffect } from 'react'

import '../styles/styles.css'
import { Link } from 'react-router-dom';

export default function About({setPageTitle}) {

    useEffect(() => {
        setPageTitle("About • BackItUp ")
    }, [] );

  return (
    <div className='container-center-login'>
        <div className='container'>
            <div className='col-md-4 offset-md-4 border rounded p-4 mt-2 shadow'>
                <p className='hero-title display-6 fw-bold'>It started with a dream.</p>
                BackItUp is a simulated equity crowdfunding platform. It was developed for Orbital 2023, after Kim and Jacob discovered a common interest in finance. We had lots of fun engineering this web app and we hope you enjoyed exploring it!
                <br></br>
            <a className='btn btn-solid-dark mt-3' href="https://docs.google.com/document/d/12-_cULe-n10RgImP3jAD-xc93ct4i41bA4zGIRr29H4/edit">Check out the ReadME</a> 
            </div>
        </div>
        </div>
  )
}
