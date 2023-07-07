import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function ThanksTopup({setPageTitle}) {

  useEffect(() => {
    setPageTitle('Thanks • BackItUp')
  }, [] );

  return (
    <div className='container-center-login'>
        <div className='py-4'>
            <h1>Thank you for believing in the future.</h1>
            <p>Please give our admin team 1-2 working days to verify your top-up.</p>
            <Link className="btn btn-solid-dark" style={{ borderRadius: 32 }}to={'/'} >
                Go to Homepage
            </Link>
        </div>
    </div>
  )
}