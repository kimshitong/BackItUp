import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userHP: "",
        userPass: "",
        userType: "",
        userVerified: false,
        userEvidence: ""
    })

    const {name, email, hp, password, type, verified, evidence} = user;

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = {
                userName: name,
                userEmail: email,
                userHP: hp,
                userPass: password,
                userType: type,
                userVerified: false,
                userEvidence: evidence
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('https://orbital-1687703004396.azurewebsites.net/api/createUser', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            
            );
            console.log(response.data);

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            console.error(error);
            console.log("diu")
          }
  
        navigate("/")
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Start your journey today.</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <label
                        htmlFor="Name"
                        className="form-label">
                        Name
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Kim"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
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
                        htmlFor="HP"
                        className="form-label">
                        HP Number
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="+65 9123 4567"
                        name="hp"
                        value={hp}
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
                        placeholder="Please choose a strong password e.g. 0Rb1tA1!"
                        name="password"
                        value={password}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Type"
                        className="form-label">
                        Account Type
                    </label>
                    <br></br>
                    <select name="type" id="selectList" onChange={(event) => handleChange(event)}>
                        <option value="" selected disabled hidden>Choose one...</option>
                        <option value={type}>Founder</option>
                        <option value={type}>Investor</option>
                    </select>
                </div>
               
                <div className="mb-3">
                    <label
                        htmlFor="Evidence"
                        className="form-label">
                        Documents
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Insert public shareable link"
                        name="evidence"
                        value={evidence}
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