import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Oops from './Oops.js'
import qr from '../paynow.jpg'

export default function Withdraw({currUser, isAuth}) {

    let navigate = useNavigate()

    const [topup, setTopup] = useState({
        walletID: "",
        withdrawalAmount: "",
        withdrawalPaynow: "",
        withdrawalDT: "",
        withdrawalVerified: "" 
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
                withdrawalAmount: amt,
                withdrawalPaynow: currUser.userHP,
                withdrawalDT: false,
                withdrawalVerified: false
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('http://localhost:8080/api/withdrawal', data, {
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
  
        navigate("/thanks") // update this
    }

  return (
    <div>
    {
        !isAuth.isLoggedIn
        ?   <Oops />
        : <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Withdrawal</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Amount
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="amt" value={amt} onChange={(event) => handleChange(event)}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Confirm</button>
                </form>
            </div>
        </div>
    </div>
        
    }
    </div>
    
  )
}

