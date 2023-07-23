import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HowToInvest({setPageTitle, setUserType}) {

    useEffect(() => {
        setUserType("")
        setPageTitle("Features • BackItUp ")
    }, [] );

  return (
    <div>
        <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="hero-title display-4 fw-bold">Back a better tomorrow.</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Our variety of companies and posts allow you to make secure and safe investments that align with your goals.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link class="btn btn-solid-dark mb-3 btn-lg px-4 me-sm-3" to="/adduser">Start Now</Link>
                </div>
            </div>
            {/* <div class="overflow-hidden" style={{ maxHeight: "30vh"}}>
                <div class="container px-5">
                    <img src="bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy" width="700" height="500"/>
                </div>
            </div> */}
    </div>
    <div className='container mb-5'>
        <div className='row g-3'>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">Simple, secure payments</h3>
                <p class="lead mb-4">Our integrated e-wallet allows you to make investments in a matter of seconds.</p>
            </div>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">Multiply your money</h3>
                <p class="lead mb-4">Our unique equity crowd-funding model allows you to earn dividends on the capital you put up.</p>
            </div>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">Go green</h3>
                <p class="lead mb-4">Easily find ESG-centric posts to view and fulfill your sustainable investing needs.</p>
            </div>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">Scam protection</h3>
                <p class="lead mb-4">All posts are manually verified by our team to check for credibility and legitimacy.</p>
            </div>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">Portfolio tracking</h3>
                <p class="lead mb-4">A simple UI allows you to see all your investments in one place.</p>
            </div>
            <div className='col-md-6 px-5' style={{textAlign: "left"}}>
                <h3 class="display-10 fw-bold">All at your fingertips</h3>
                <p class="lead mb-4">Intuitive search features allow you to discover posts.</p>
            </div>
        </div>
    </div>
  </div>
  )
}
