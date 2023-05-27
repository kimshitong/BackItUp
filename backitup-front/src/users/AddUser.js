import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const {name, email} = user;

    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:8080/user", user) // change link as necessary
        navigate("/")
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"} className="form-control" placeholder="Enter your name..." name="name" value={name} onChange={(event) => onInputChange(event)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input type={"text"} className="form-control" placeholder="kim@backitup.com" name="email" value={email} onChange={(event) => onInputChange(event)}/>
                </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            
        </div>
    </div>

  )
}
