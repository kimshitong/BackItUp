import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Oops from './Oops.js'
import qr from '../paynow.jpg'

export default function Topup({ currUser, isAuth, setPageTitle }) {

  let navigate = useNavigate()

  useEffect(() => {
    setPageTitle("Top-up • BackItUp")
  }, [])

  const [topup, setTopup] = useState({
    walletID: "",
    topupAmount: "",
    topupPaynow: "",
    topupDT: "",
    topupVerified: "",
    topupEvidence: ""
  })

  const { walletID, topupAmount, topupPaynow, topupDT, topupVerified, topupEvidence } = topup;
  const handleChange = (e) => {
    setTopup({ ...topup, [e.target.name]: e.target.value })
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
        topupVerified: 0, // is this 0 or 1
        topupEvidence: topupEvidence
      };

      if (topupAmount <= 0) {
        throw new Error()
      }

      // Create a user with the created wallet.java
      const response = await axios.post('https://orbital-1690142964708.azurewebsites.net/api/topup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      console.log("congrats topup success");

      navigate("/topup/thanks")
    } catch (error) {
      console.log("topup error")
      alert("Please ensure you entered valid positive numbers.")
    }

  }

  return (
    <div>
      {
        !isAuth.isLoggedIn
          ? <Oops />
          : <div className="container-center-signup">
            <div className="col-md-6 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">We won't steal your money, we promise.</h2>
              <form onSubmit={(event) => onSubmit(event)}>
                <div className='row g-3 m-3' style={{ textAlign: "left" }}>
                  <div className='col-md-6'>
                    <label htmlFor="Name" className="form-label">
                      Amount
                    </label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter a number..."
                        name="topupAmount"
                        value={topupAmount}
                        onChange={(event) => handleChange(event)} />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor="Paynow" className="form-label">
                      Paynow Number
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter a number..."
                      name="topupPaynow"
                      value={topupPaynow}
                      onChange={(event) => handleChange(event)} />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor="Evidence" className="form-label">
                      Reference Number
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your name and date on your PayNow app"
                      name="topupEvidence"
                      value={topupEvidence}
                      onChange={(event) => handleChange(event)} />
                  </div>
                </div>
                <label>
                  Please scan the QR code to top-up your wallet.
                </label>
                <br></br>
                <img src={qr} alt="Paynow QR code" height="200" />
                <br></br>
                <button type="submit" className="btn btn-solid-dark m-3">Confirm!</button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}

