import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Oops({ setPageTitle }) {

  useEffect(() => {
    setPageTitle("Oops • BackItUp")
  }, [])

  return (
    <div className='container-center-login'>
      <div className='py-4'>
        <h1>Aw, snap!</h1>
        <p>You must be logged in to view this page.</p>
        <Link className="btn btn-solid-dark" style={{ borderRadius: 32 }} to={'/'} >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
