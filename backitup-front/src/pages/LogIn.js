import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogIn({currUser, setIsAuth}) {

    let navigate = useNavigate()

    const [token, setToken] = useState([])

    const { email, password } = token

    const handleChange = (event) => {
        setToken({...token, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        const details = {
            userEmail: email,
            userPass: password
        }

        const isVerified = await axios.post(`http://localhost:8080/api/verifyUser/${details.userEmail}/${details.userPass}`)

        if (isVerified === null) {
            alert('You have input an incorrect email/password. Please refresh and resubmit the form.')
        } else {
            setIsAuth([true, isVerified])
            const currUser = await axios.get(`http://localhost:8080/api/user/${isVerified}`)
            navigate("/")
        }

    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Log In</h2>
                <form onSubmit={(event) => onSubmit(event)}>
               
                <div className="mb-3">
                    <label
                        htmlFor="Email"
                        className="form-label">
                        Email
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="kim@backitup.com"
                        name="email"
                        value={email}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
              
                <div className="mb-3">
                    <label
                        htmlFor="Password"
                        className="form-label">
                        Password
                    </label>
                    <input 
                        type={"text"} 
                        className="form-control"
                        placeholder="Make sure no one is watching!"
                        name="password"
                        value={password}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}
