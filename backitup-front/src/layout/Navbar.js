import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Navbar({isAuth, setIsAuth, currUser}) {

  console.log(isAuth.isLoggedIn, "status of log in");
  
  const isCompany = axios.post(`http://localhost:8080/api/verifyCompany/${currUser.userEmail}/${currUser.userPass}`)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            BackItUp {/* add functionality: clicking this will return to homepage */}
          </a>
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
          </button>

          <div>
              {isAuth.isLoggedIn
              ? <>
                  <p className="text-white">Hello {currUser.userName}</p>
                  
                  {
                    isCompany &&
                    <Link className="btn btn-outline-light m-2" to="/create">
                    Create Post
                    </Link>
                    
          
                  }
                  <Link className="btn btn-outline-light m-2" to="/">
                  Log Out
                  </Link>
                </>
              : <>
                  <Link className="btn btn-outline-light m-2" to="/login">
                    Log In
                  </Link> 
                  <Link className="btn btn-outline-light m-2" to="/adduser">
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