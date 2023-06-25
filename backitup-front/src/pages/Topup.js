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

      const {walletID, topupAmount, topupPaynow, topupDT, topupVerified} = topup;
      const handleChange = (e) => {
        setTopup({...topup, [e.target.name]: e.target.value})
      }

    // Post user topup info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
          
            const date = new Date();
            const formattedDate = date.toISOString().substr(0, 19);
            const data = {
                walletID: currUser.wallet.wallet_ID,
                topupAmount: parseFloat(topupAmount),
                topupPaynow: parseInt(topupPaynow, 10),
                topupDT: formattedDate,
                topupVerified: 1 // is this 0 or 1
              };

            // const data = {
            //   walletID: 1,
            //   topupAmount: 50.0,
            //   topupPaynow: 456,
            //   topupDT: '2023-06-25T15:30:00',
            //   topupVerified: 1 // is this 0 or 1
            // };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('http://orbital-1687676297440.azurewebsites.net/api/topup', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
            });

            console.log(response.data);
              console.log("congrats topup success");
              
            navigate("/thanks")
            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            // console.error(error);
            console.log("topup error")
          }
          
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
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="topupAmount" value={topupAmount} onChange={(event) => handleChange(event)}/>
                        <br></br>
                        <label htmlFor="Paynow" className="form-label">
                            Paynow Number
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="topupPaynow" value={topupPaynow} onChange={(event) => handleChange(event)}/>
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

