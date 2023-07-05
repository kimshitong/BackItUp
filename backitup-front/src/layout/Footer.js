import React from 'react'
import logo from "../images/b.png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="container d-flex justify-content-between align-items-top">
                <div className="d-flex flex-column align-items-start mt-5">
                    <img src={logo} alt="Back It Up" className="mb-3" style={{ height: 50 }} />
                    <div>
                        BackItUp is a simulated equity-crowdfunding platform created for Orbital 2023.
                        We hope you enjoyed exploring our web app!
                    </div>
                </div>
                <div className="d-flex flex-column align-items-start mt-5">
                    <h4>Get Started</h4>
                    <p>Invest</p>
                    <p>Raise</p>
                </div>
                <div className="d-flex flex-column align-items-start mt-5">
                    <h4>BackItUp</h4>
                    <p>Milestones</p>
                    <p>Contact Us</p>
                    <Link to={"/admin"} >
                        Admin Panel
                    </Link>

                </div>
            </div>
        </div>
    </footer>
  )
}
