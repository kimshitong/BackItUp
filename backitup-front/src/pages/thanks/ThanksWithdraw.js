import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function ThanksWithdraw({ setPageTitle }) {

  useEffect(() => {
    setPageTitle('Thanks • BackItUp')
  }, []);

  return (
    <div className='container-center-login'>
      <div className='py-4'>
        <h1>Reap your rewards.</h1>
        <p>Please give our admin team 1-2 working days to process your request. We will return your returns, don't worry!</p>
        <Link className="btn btn-solid-dark" style={{ borderRadius: 32 }} to={'/'} >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}