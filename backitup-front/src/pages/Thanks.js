import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Thanks({ setPageTitle }) {

  useEffect(() => {
    setPageTitle('Thanks • BackItUp')
  }, []);

  return (
    <div className='container-center-login'>
      <div className='py-4'>
        <h1>Thank you for believing in the future.</h1>
        <p>Once your payment is verified, you will be able to earn dividends on your investment.</p>
        <Link className="btn btn-solid-dark" style={{ borderRadius: 32 }} to={'/'} >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}