import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateCompany({currUser}) {

    let navigate = useNavigate()

    const [company, setCompany] = useState({
        userName: "",
        userEmail: "",
        userHP: "",
        userPass: "",
        userType: "",
        userVerified: false,
        userEvidence: ""
    })

    const {name, email, hp, password, evidence} = company;

    const handleChange = (event) => {
        setCompany({...company, [event.target.name]: event.target.value});
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
                userType: "Company",
                userVerified: false,
                userEvidence: evidence
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post(`http://orbital-1687676297440.azurewebsites.net/api/createCompany/${currUser.userID}`, data, {
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
                        Company Name
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