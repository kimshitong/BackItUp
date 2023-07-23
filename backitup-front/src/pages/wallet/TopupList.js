import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import Loader from '../../components/Loader.jsx'

export default function TopupList({ wallet }) {

  // Initialise homepage to be blank
  const [topups, setTopups] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    loadTopups()
  }, []);

  // Get list of users from database
  const loadTopups = async () => {
    console.log("my wallet", wallet);
    const result = await axios.get(`https://orbital-1690146023037.azurewebsites.net/api/listTopUp/${wallet.wallet_ID}`)
    setTopups(result.data)
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  return (
    <div className='container'>
      <div className='py-4 d-flex align-items-center justify-content-center'>
        {loading ? <Loader /> :
          <table className="table border shadow-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Verified?</th>
              </tr>
            </thead>
            <tbody>
              {
                topups.map((topup, index) => (
                  <tr>
                    <th scope="row" key="index">{index + 1}</th>
                    <td>{topup.topupDT}</td>
                    <td>{topup.topupAmount}</td>
                    <td>
                      {topup.pendingStatus
                        ? 'N'
                        : 'Y'}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}
