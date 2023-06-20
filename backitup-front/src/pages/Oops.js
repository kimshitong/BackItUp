import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Oops() {

  return (
    <div className='container'>
        <div className='py-4'>
            <h1>Oh no...</h1>
            <p>You must be logged in to view this page.</p>
            <Link className="btn btn-outline-primary" to={'/'} >
                Return Home
            </Link>
        </div>
    </div>
  )
}
