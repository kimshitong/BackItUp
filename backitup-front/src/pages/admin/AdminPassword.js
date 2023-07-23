import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import logoWords from "../../images/logo-words.png"
import pwShow from '../../images/pw-show.png'
import pwHide from '../../images/pw-hide.png'


export default function AdminPassword({setUserType, setPageTitle}) {
    
    const [password, setPassword] = useState("")
    
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
        setPageTitle("Admin • BackItUp")
    };

    let navigate = useNavigate()

    const handleSubmit = () => {
        // Replace 'your_password_here' with your actual password
        console.log(password);
        if (password == 'admin') {
          // Password is correct, navigate to the protected page
          navigate("/admin/auth")
        } else {
          // Password is incorrect, show an alert
          alert("You have input an incorrect password. GG sir.")
          setPassword("")
        }
      };


    useEffect(() => {
        setUserType("Admin")
      }, [] )

  return (
    <div className='container-center-login'>
      <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
                <img src={logoWords} alt="BackItUp" style={{ maxHeight: 50}} className="m-2 mb-4" /><small className='fw-bold'>ADMIN</small>
                <div className="mb-3">
                        {/* <label
                            htmlFor="Password"
                            className="form-label">
                            Password
                        </label> */}
                        <div className="password-input-wrapper">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                className={showPassword ? "form-control" : "form-control password-input"}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" className="btn password-toggle" onClick={handleTogglePassword}>
                                <img src={showPassword ? pwHide : pwShow} style={{height: 30}}/>
                            </button>
                        
                        </div>
                    </div>
                    <button type="submit" className="btn btn-solid-dark mb-3" onClick={handleSubmit} disabled={ password === undefined } >Submit</button>
    
            </div></div></div></div>
  )
}
