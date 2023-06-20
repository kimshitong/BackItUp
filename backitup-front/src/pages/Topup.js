import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Oops from './Oops.js'
import qr from '../paynow.jpg'

export default function Topup({currUser, isAuth}) {

    let navigate = useNavigate()

    const [topup, setTopup] = useState({
        walletID: "",
        topupAmount: "",
        topupPaynow: "",
        topupDT: "",
        topupVerified: "" 
      })

      const {wallet_ID, amt, paynow, dt, verified} = topup;
      const handleChange = (e) => {
        setTopup({...topup, [e.target.name]: e.target.value})
      }

    // Post user investment info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = {
                walletID: currUser.wallet.wallet_ID,
                topupAmount: amt,
                topupPaynow: currUser.userHP,
                topupDT: false,
                topupVerified: 0
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('http://localhost:8080/api/topup', data, {
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
  
        navigate("/thanks")
    }

  return (
    <div>
    {
        !isAuth.isLoggedIn
        ?   <Oops />
        : <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Top-up now!</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Amount
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="amt" value={amt} onChange={(event) => handleChange(event)}/>
                        <br></br>
                        <label>
                            Please scan the QR code to top-up your wallet.
                        </label>
                        <br></br>
                        <img src={qr} alt="Paynow QR code" height="200"/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Confirm!</button>
                </form>
            </div>
        </div>
    </div>
        
    }
    </div>
    
  )
}

