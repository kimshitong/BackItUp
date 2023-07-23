import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HowToRaise({ setPageTitle, setUserType }) {

  useEffect(() => {
    setUserType("")
    setPageTitle("Features • BackItUp ")
  }, []);

  return (
    <div>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="hero-title display-4 fw-bold">Be the change you want to see.</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Apply to be a founder and create a company once your account has been verified to start building your dream.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-solid-dark mb-3 btn-lg px-4 me-sm-3" to="/adduser">Start Now</Link>
          </div>
        </div>
      </div>
      <div className='container mb-5'>
        <div className='row g-3'>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Simple, secure payments</h3>
            <p class="lead mb-4">Our integrated e-wallet allows you to receive investments in a matter of seconds.</p>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Simple listings</h3>
            <p class="lead mb-4">An intuitive process allows you to publish your posts in a matter of minutes.</p>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Drive brand awareness</h3>
            <p class="lead mb-4">Push your audience to your official sites and pitch decks to drive further interest.</p>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Scam protection</h3>
            <p class="lead mb-4">All posts are manually verified by our team to check for credibility and legitimacy.</p>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Sustainable goals</h3>
            <p class="lead mb-4">Highlight ESG aspects of your project to attract more investors.</p>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Fully flexible</h3>
            <p class="lead mb-4">Edit post and fundraising information as you go, to meet your changing business needs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
