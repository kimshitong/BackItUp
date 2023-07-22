import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import pwShow from '../images/pw-show.jpg'
import pwHide from '../images/pw-hide.jpg'
import logoWords from "../images/logo-words.png"
import AddUserAuth from "./auth/AddUserAuth"
import jwt_decode from "jwt-decode";

import "../styles/styles.css"

// Step 1: Email and password input
const Step1 = ({ onNext, user, handleChange, setUser }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission for Step 1
      // Validate email, password, confirm password, etc.
      // Call onNext to proceed to the next step
      onNext();
    };

    const handleCallbackResponse = (response) => {
        console.log(response.credential);
        var userObject = jwt_decode(response.credential)
        console.log(userObject);
        console.log(userObject.name);
        // setUser({...user, userEmail: userObject.email});
        setUser({
            ...user,
            userEmail: userObject.email,
            userOauthType: 'GOOGLE',
            userOauthIdentifier: userObject.sub,
        });
        console.log(user);
        onNext();
      }

   
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "502112046738-80gbpokjtcn2qqur1su4g69jp28dtvgk.apps.googleusercontent.com",
          callback: handleCallbackResponse
        })
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "outline", size: "large"}
        )
      }, [])
      
      useEffect(() => {
        console.log(user);
      }, [user]);

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
                    required type={"text"}
                    className="form-control"
                    placeholder="example@backitup.com"
                    name="userEmail"
                    value={user.userEmail}
                    onChange={(event) => handleChange(event)}
                />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
        <button className="btn btn-outline-dark mb-2" type="submit">Next</button>
      </form>
      <hr/>
    <div id="signInDiv" className='btn btn-block mb-2'></div>
    <br/>
      <small id="loginHelp" className="form-text text-muted">Already have an account? <a href="/login">Log in now.</a></small>
      </div></div></div></div>
    );
  };


// Step 2: Other personal details
const Step2 = ({ onPrevious, onSubmit, user, handleChange }) => {

    
     
    return (
        <div className="container-center-signu mt-3 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
      <form onSubmit={onSubmit}>
        <h2>Step 2: Personal Information</h2>
        <div className="mb-3" style={{ textAlign: "left" }}>
                <label
                    htmlFor="Password"
                    className="form-label">
                    Password
                </label>
                <input 
                    required type={"text"} 
                    className="form-control"
                    placeholder="Password"
                    name="userPass"
                    value={user.userPass}
                    onChange={(event) => handleChange(event)}
                />
                <small id="passwordHelp" class="form-text text-muted">Please choose a strong password.</small>
            </div>
        <div className="mb-3" style={{ textAlign: "left" }}>
            <label
                htmlFor="Name"
                className="form-label">
                Name
            </label>
            <input
                required type={"text"}
                className="form-control"
                placeholder="Kim"
                name="userName"
                value={user.userName}
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
                required 
                type={"text"}
                className="form-control"
                placeholder="+65 9123 4567"
                name="userHP"
                value={user.userHP}
                onChange={(event) => handleChange(event)}
            />
        </div>
        <div className="mb-3" style={{ textAlign: "left" }}>
            <label
                htmlFor="Type"
                className="form-label">
                Account Type
            </label>
            <select required class="form-control" name="userType" id="selectList" onChange={(event) => handleChange(event)}>
                <option value="" defaultValue disabled hidden>Click to choose one...</option>
                <option value={user.userType}>Founder</option>
                <option value={user.userType}>Investor</option>
            </select>
        </div>
    
        
        <button className="btn btn-outline-dark mx-1" type="button" onClick={onPrevious}>Previous</button>
        <button className="btn btn-solid-dark mx-1" type="submit">Submit</button>
      </form>
      </div></div></div></div>
    );
  };
  

export default function AddUser({setPageTitle}) {

    let navigate = useNavigate()

    useEffect(() => {
        setPageTitle("Register • BackItUp") 
    }, [] )
    
    const [step, setStep] = useState(1);
    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userHP: "",
        userPass: "",
        userType: "",
        userVerified: false,
        userEvidence: "",
        userOauthType: "",
        userOauthIdentifier: "",
        userShowContact: true
    })

    // const {name, email, hp, password, type, verified, evidence, oauthtype, oauthid} = user;
  
    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }
    
    const handleNext = () => {
        setStep(2);
    };

    const handlePrevious = () => {
        setStep(1);
    };

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = {
                userName: user.userName,
                userEmail: user.userEmail,
                userHP: user.userHP,
                userPass: user.userPass,
                userType: user.userType,
                // userVerified: false,
                userEvidence: user.userEvidence,
                userOauthType: user.userOauthType,
                userOauthIdentifier: user.userOauthIdentifier
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('http://localhost:8080/api/createUserbyAuth', data, {
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
  
        navigate("/adduser/thanks")
    };

  return (
    <div>
        {step === 1 && <Step1 onNext={handleNext} user={user} handleChange={handleChange} setUser={setUser} />}
        {step === 2 && (
            <Step2
            onPrevious={handlePrevious}
            onSubmit={onSubmit}
            handleChange={handleChange}
            user={user}
            />
        )}
    </div>

  )
}