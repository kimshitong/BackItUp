import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function TopupList(wallet) {

    // Initialise homepage to be blank
    const [topups, setTopups] = useState([])

    useEffect(() => {
        loadTopups()
    }, [] );

    // Get list of users from database
    const loadTopups = async () => {
        console.log("my wallet", wallet);
        const result = await axios.get(`https://orbital-1687676297440.azurewebsites.net/api/listTopUp/${wallet.wallet_ID}`)
        setTopups(result.data)
    }

    // const clickVerify = (userID) => {
    //     axios.get(`https://orbital-1687676297440.azurewebsites.net/api/invest/${shareid}/${userID}/${share_amount}/${dt}`)
    //     alert("Successfully verified! Please refresh the page.")
    // }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
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
                            <td>{topup.topupID}</td>
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
        </div>
    </div>
  )
}
