import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function ThanksCreateCompany({setPageTitle}) {

  useEffect(() => {
    setPageTitle('Thanks • BackItUp')
  }, [] );

  return (
    <div className='container-center-login'>
        <div className='py-4'>
            <h1>A journey of a thousand miles...</h1>
            <p>Please give our admin team 1-2 working days to verify your account, after which you will be approved to create a post.</p>
            <p>Meanwhile, feel free to explore our platform and community.</p>
            <Link className="btn btn-solid-dark" style={{ borderRadius: 32 }}to={'/'} >
                Start Browsing
            </Link>
        </div>
    </div>
  )
}