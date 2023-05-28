import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
  
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = () => {
    setIsAuth(true)
  }

  const handleLogout = () => {
    setIsAuth(false)
  }

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

          {/* to insert conditional functionality
            if not logged in, show sign up button
            if logged in, show create post button
          */}
          {
            isAuth
              ? <><Link onClick={handleLogin} className="btn btn-outline-light" to="/login">
                Log In
                </Link> 
                <Link className="btn btn-outline-light" to="/adduser">
                    Sign Up
                </Link>
                </>
              : <Link onClick={handleLogout} className="btn btn-outline-light" to="/">
                Log Out
                </Link> 
          }
          
        </div>
      </nav>
    </div>
  );
}