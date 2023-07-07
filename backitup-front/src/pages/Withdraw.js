import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Oops from './Oops.js'
import qr from '../paynow.jpg'

export default function Withdraw({currUser, isAuth, setPageTitle}) {

    let navigate = useNavigate()

    useEffect(() => {
      setPageTitle("Withdraw • BackItUp") 
    }, [] )

    const [topup, setTopup] = useState({
        walletID: "",
        withdrawalAmount: "",
        withdrawalPaynow: "",
        withdrawalDT: "",
        withdrawalVerified: "" 
      })

      const {wallet_ID, withdrawalAmount, withdrawalPaynow, dt, verified} = topup;
      const handleChange = (e) => {
        setTopup({...topup, [e.target.name]: e.target.value})
      }

    // Post user investment info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
          const date = new Date();
          const formattedDate = date.toISOString().substr(0, 19);
        
            const data = {
                walletID: currUser.wallet.wallet_ID,
                withdrawalAmount: parseFloat(withdrawalAmount),
                withdrawalPaynow: parseInt(withdrawalPaynow),
                withdrawalDT: formattedDate,
                withdrawalVerified: 0
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
            console.log("withdrawal success");

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            // console.error(error);
            console.log("withdrawal failure")
          }
  
        navigate("/withdraw/thanks") // update this
    }

  return (
    <div>
    {
        !isAuth.isLoggedIn
        ?   <Oops />
        : <div className="container-center-login">
            <div className="col-md-6 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Withdrawal</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="row g-3 my-3" style={{ textAlign: "left" }}>
                      <div className='col-md-6'>
                        <label htmlFor="Name" className="form-label">
                            Amount
                        </label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type={"text"} className="form-control" placeholder="Enter a number..." name="withdrawalAmount" value={withdrawalAmount} onChange={(event) => handleChange(event)}/>
                          </div>
                          </div>
                          <div className='col-md-6'>
                          <label htmlFor="Paynow" className="form-label">
                            PayNow Number
                          </label>
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="withdrawalPaynow" value={withdrawalPaynow} onChange={(event) => handleChange(event)}/>
                        <small className="form-text text-muted">Our team will credit this PayNow account.</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-solid-dark mt-3">Confirm</button>
                </form>
            </div>
    </div>
        
    }
    </div>
    
  )
}

