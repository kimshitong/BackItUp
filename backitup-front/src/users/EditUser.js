// Not in use

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import pwShow from '../images/pw-show.png'
import pwHide from '../images/pw-hide.png'
import logoWords from "../images/logo-words.png"

import "../styles/styles.css"

// Step 1: Email and password input
const Step1 = ({ onNext, user, handleChange }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission for Step 1
      // Validate email, password, confirm password, etc.
      // Call onNext to proceed to the next step
      onNext();
    };
  
    return (
        <div className="container-center-login">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
                    <form onSubmit={handleSubmit}>
        <h2>Step 1: Account Information</h2>
            <div className="mb-3"  style={{ textAlign: "left" }}>
                <label
                    htmlFor="Email"
                    className="form-label">
                    Email
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="example@backitup.com"
                    name="email"
                    value={user.email}
                    onChange={(event) => handleChange(event)}
                />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
                <label
                    htmlFor="Password"
                    className="form-label">
                    Password
                </label>
                <input 
                    type={"text"} 
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={(event) => handleChange(event)}
                />
                <small id="passwordHelp" class="form-text text-muted">Please choose a strong password.</small>
            </div>
        <button className="btn btn-outline-dark mb-2" type="submit">Next</button>
      </form>
      <small id="loginHelp" className="form-text text-muted">Already have an account? <a href="/login">Log in now.</a></small>
      </div></div></div></div>
    );
  };


// Step 2: Other personal details
const Step2 = ({ onPrevious, onSubmit, user, handleChange }) => {
     
    return (
        <div className="container-center-signup">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
      <form onSubmit={onSubmit}>
        <h2>Step 2: Personal Information</h2>
        <div className="mb-3" style={{ textAlign: "left" }}>
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
                value={user.name}
                onChange={(event) => handleChange(event)}
            />
        </div>
        <div className="mb-3" style={{ textAlign: "left" }}>
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
                value={user.hp}
                onChange={(event) => handleChange(event)}
            />
        </div>
        <div className="mb-3" style={{ textAlign: "left" }}>
            <label
                htmlFor="Type"
                className="form-label">
                Account Type
            </label>
            <select class="form-control" name="type" id="selectList" onChange={(event) => handleChange(event)}>
                <option value="" selected disabled hidden>Click to choose one...</option>
                <option value={user.type}>Founder</option>
                <option value={user.type}>Investor</option>
            </select>
        </div>
    
        <div className="mb-3" style={{ textAlign: "left" }}>
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
                value={user.evidence}
                onChange={(event) => handleChange(event)}
            />
            <small id="evidenceHelp" class="form-text text-muted">This will be cross-referenced by our admin team before we verify your account.</small>
        </div>
        <button className="btn btn-outline-dark mx-1" type="button" onClick={onPrevious}>Previous</button>
        <button className="btn btn-solid-dark mx-1" type="submit">Submit</button>
      </form>
      </div></div></div></div>
    );
  };
  

export default function EditUser({currUser}) {

    let navigate = useNavigate()
    
    const [step, setStep] = useState(1);
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
            const response = await axios.post('http://localhost:8080/api/createUser', data, {
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
                 <div className="border rounded p-4 mt-2 shadow">
                    
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
                    <button type="submit" className="btn btn-outline-primary mb-3">Submit</button>
                    <div>
                        <small id="loginHelp" className="form-text text-muted">Already have an account? <a href="/login">Log in now.</a></small>    
                    </div>
                    </form>
                </div>
                
            </div>
        </div>

  )
}