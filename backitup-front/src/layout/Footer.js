import React from 'react'
import logo from "../images/b.png"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container d-flex justify-content-between align-items-top mb-5">
                    <div className="d-flex flex-column align-items-start mt-5">
                        <img src={logo} alt="Back It Up" className="mb-3" style={{ height: 50 }} />
                        <div>
                            BackItUp is a simulated equity-crowdfunding platform created for Orbital 2023.
                            We hope you enjoyed exploring our web app!
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start mt-5">
                        <h4 className='fw-boldcd'>Get Started</h4>
                        <Link className="mb-2" to={"/getstarted"}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                transition: "color 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "grey"; // Change the color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white"; // Revert back to the original color
                            }}>
                            Resources
                        </Link>
                        <Link className="mb-2" to={"/getstarted/invest"}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                transition: "color 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "grey"; // Change the color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white"; // Revert back to the original color
                            }}>
                            Invest
                        </Link>
                        <Link className="mb-2" to={"/getstarted/raise"}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                transition: "color 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "grey"; // Change the color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white"; // Revert back to the original color
                            }}>
                            Raise
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-start mt-5">
                        <h4 className='fw-bold'>BackItUp</h4>
                        <Link className="mb-2" to={"/about"}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                transition: "color 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "grey"; // Change the color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white"; // Revert back to the original color
                            }}>
                            About
                        </Link>
                        <Link className="mb-2" to={"/admin"}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                transition: "color 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "grey"; // Change the color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white"; // Revert back to the original color
                            }}>
                            Admin Panel
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
