import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../styles/styles.css"
import logo from "../images/logo-words.png"

export default function Navbar({isAuth, setIsAuth, currUser, userType}) {

  const [isCompany, setIsCompany] = useState(false)

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
              <Link className="btn btn-outline-dark m-2" to={"/getstarted/invest"}>
                Invest
              </Link>
              <Link className="btn btn-outline-dark m-2" to={"/getstarted/raise"}>
                Raise
              </Link>
            </div>
          </div>
          
          {/* <button
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
              ? <>
                  {/* <p className="text-white">Hello {currUser.userName}</p> */}
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
                  </Link>
                </>
              : <>
                  <Link className="btn btn-outline-dark m-2" to="/login">
                    Log In
                  </Link> 
                  <Link className="btn btn-outline-dark m-2" to="/adduser">
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