import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import pwShow from '../images/pw-show.jpg'
import pwHide from '../images/pw-hide.jpg'
import logoWords from "../images/logo-words.png"

import "../styles/styles.css"

export default function LogIn({setCurrUser, setIsAuth, setPageTitle}) {

    let navigate = useNavigate()

    useEffect(() => {
        setPageTitle("Log In • BackItUp") 
    }, [] )

    const [token, setToken] = useState([])
    const [showPassword, setShowPassword] = useState(false);

    const { email, password } = token

    const handleChange = (event) => {
        setToken({...token, [event.target.name]: event.target.value});
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const details = {
                userEmail: email,
                userPass: password
            }

            console.log(password, "password submitted is")

            const isVerified = await axios.get(`http://localhost:8080/api/verifyUser/${details.userEmail}/${details.userPass}`)
            console.log(isVerified.data, "API result");

            if (isVerified == "") {
                alert('You have input an incorrect email/password. Please refresh and resubmit the form.')
            } else {
                setIsAuth({ isLoggedIn: true, userID: isVerified.data })
                const currResponse = await axios.get(`http://localhost:8080/api/user/${isVerified.data}`).then()
                const curr = currResponse.data
                setCurrUser(curr)
                navigate("/")
                console.log("login SUCCESS");
            }
        } catch (error) {
            console.error(error);
            console.log("diu")
        }

    };

  return (
    <div className="container-center-login">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
                    <img src={logoWords} alt="BackItUp" style={{ maxHeight: 50}} className="m-2 mb-4" />
                    {/* <h2 className="text-center m-4">Log In</h2> */}
                    <form onSubmit={(event) => onSubmit(event)}>
                
                    <div className="mb-3">
                        {/* <label
                            htmlFor="Email"
                            className="form-label">
                            Email
                        </label> */}
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                
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
                                onChange={(event) => handleChange(event)}
                            />
                            <button className="btn password-toggle" onClick={handleTogglePassword}>
                                <img src={showPassword ? pwHide : pwShow} style={{height: 30}}/>
                            </button>
                        
                        </div>
                    </div>
                    <button type="submit" className="btn btn-solid-dark mb-3">Submit</button>
                    <div>
                        <small id="loginHelp" className="form-text text-muted">Don't have an account? <a href="/adduser">Sign up today.</a></small>    
                    </div>
                    
                    </form>
                </div>
                
            </div> 
        </div>
    </div>
  )
}
