import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../styles/styles.css"
import logo from "../images/logo-words.png"
import bell from "../images/bell.png"
import NotificationDrawer from "./NotificationDrawer";
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap';  

import { Button } from 'react-bootstrap';

export default function Navbar({isAuth, setIsAuth, currUser, userType}) {

  const [isCompany, setIsCompany] = useState(false)
  const [showNotif, setShowNotif] = useState(false)

  console.log(isAuth.isLoggedIn, "status of log in");
  console.log(currUser.userID, "userID is current");

  useEffect(() => {
    loadData()
    console.log(isCompany, "my current company");
  }, [] )

  const loadData = async () => {
    const isCompanyResponse = axios.get(`http://localhost:8080/api/verifyCompany/${currUser.userEmail}/${currUser.userPass}`)
    const isComp = isCompanyResponse.data
    if (isComp === null || isComp === undefined) {
      setIsCompany(false)
    } else {
      setIsCompany(true)
    }
    console.log(isCompany, "MY CURENT COMPANY");
  }

  const handleNotifToggle = () => {
    setShowNotif(!showNotif);
  };
  
  const handleLogOut = () => {
    setIsAuth({isLoggedIn: false, userID: undefined})
  }

  return (
    <div>
      <nav className={`navbar navbar-${userType} navbar-expand-lg`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Back It Up" />
            </Link>
            <div className="d-flex align-items-center">
              <Link className="fw-bold m-2" to={"/getstarted/invest"} 
                style={{
                  textDecoration: "none",
                  color: "black",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "grey"; // Change the color on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "black"; // Revert back to the original color
                }}>
                INVEST
              </Link>
              <Link className="fw-bold m-2" to={"/getstarted/raise"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "grey"; // Change the color on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "black"; // Revert back to the original color
                }}>
                RAISE
              </Link>
            </div>
          </div>
{/*           
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div>
          
              {isAuth.isLoggedIn
              ? <div className="d-flex">
              <button className='btn btn-link' onClick={handleNotifToggle}><img src={bell} style={{ height: "30px" }} /></button>
              
              <Container className='p-2'>  
                <DropdownButton variant="success" id="dropdown-basic-button" title="Settings" className="flex-column">  
                  <div className="dropdown-links-container">
                  <Link className='dropdown-link mx-2' to={"/profile/" + currUser.userID}>
                    My Profile
                  </Link>
                  { currUser.userType == "Investor"
                    ? <></>
                    : currUser.userType == "Founder" // has to be founder
                    ? currUser.userVerified === 1
                      ? <Link className="dropdown-link mx-2" to="/createcompany">
                      Create Company
                      </Link>
                      : <></>
                    : currUser.userVerified === 1
                      ? <Link className="dropdown-link mx-2" to="/create">
                      Create Post
                      </Link>
                      : <></>
                  }
                  <Link onClick={handleLogOut} className="dropdown-link mx-2" to="/">
                  Log Out
                  </Link>
                  </div>
                </DropdownButton>  
              </Container>
              <NotificationDrawer show={showNotif} onClose={handleNotifToggle} currUser={currUser} />
                  {/* <p className="text-white">Hello {currUser.userName}</p>
                  <Link className="btn btn-outline-dark m-2" to={"/profile/" + currUser.userID}>
                    Hello {currUser.userName}
                  </Link>
                  {
                    currUser.userType !== "Company"
                    ? <Link className="btn btn-outline-dark m-2" to="/createcompany">
                    Create Company
                    </Link>
                    : <Link className="btn btn-outline-dark m-2" to="/create">
                      Create Post
                      </Link>
          
                  }
                  <Link onClick={handleLogOut} className="btn btn-outline-dark m-2" to="/">
                  Log Out
                  </Link> */}
                </div>
              : <>
                  <Link className="btn btn-outline-dark shadow-sm m-2" to="/login">
                    Log In
                  </Link> 
                  <Link className="btn btn-light shadow-sm m-2" to="/adduser">
                    Sign Up
                  </Link>
                </>
               
              }
          </div>

          
        </div>
      </nav>
    </div>
  );
}